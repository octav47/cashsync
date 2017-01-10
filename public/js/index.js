(function ($) {
    var addSpending = $('#add-spending');
    var addSpendingBtn = $('#add-spending-btn');

    var _now = new Date();

    var _data = {};
    var _categories = {};

    function formatDate(date) {
        var d = date.getDate();
        if (d < 10) {
            d = '0' + d;
        }
        var m = date.getMonth() + 1;
        if (m < 10) {
            m = '0' + m;
        }
        var y = date.getFullYear();

        return [m, d, y].join('/');
    }

    function getIDFromDate(date) {
        var d = date.getDate();
        if (d < 10) {
            d = '0' + d;
        }
        var m = date.getMonth() + 1;
        if (m < 10) {
            m = '0' + m;
        }
        var y = date.getFullYear();

        return [m, d, y].join('');
    }

    function createBlock(date, value, category) {
        var blockID = getIDFromDate(date);
        var block = $('#' + blockID);

        var isNewBlock = false;

        if (block.length === 0) {
            block = $('<div id="' + blockID + '" class="row block"><span>' + formatDate(date) + '</span></div>');
            isNewBlock = true;
        }

        block.append('<div class="row"><input value="' + value + '"><input value="' + _categories[category] + '"></div>');

        if (isNewBlock) {
            block.insertAfter(addSpending);
        }
    }

    function createDates(data) {
        for (var d of data) {
            createBlock(new Date(d.date), d.value, d.category);
        }
    }

    function init() {
        $.when($.get('/data/categories.json'), $.get('/data/dates.json'))
            .then(function (res1, res2) {
                _categories = res1[0].categories;

                _data = res2[0].dates;
                createDates(_data);
            });

        addSpending.find('.date').datepicker({
            showOtherMonths: true,
            selectOtherMonths: true
        });
        addSpending.find('.date').datepicker('setDate', _now);

        addSpendingBtn.on('click', function () {
            addSpending.fadeIn(250);
        });

        addSpending.find('.submit').on('click', function () {
            addSpending.fadeOut(250, function () {
                var date = addSpending.find('.date').datepicker('getDate', _now);
                var value = +addSpending.find('.value').val();
                var category = addSpending.find('.category').val();

                var blockID = getIDFromDate(date);
                var block = $('#' + blockID);

                var isNewBlock = false;

                if (block.length === 0) {
                    block = $('<div id="' + blockID + '" class="row block"><span>' + formatDate(date) + '</span></div>');
                    isNewBlock = true;
                }

                block.append('<div class="row"><input value="' + value + '"><input value="' + category + '"></div>');

                if (isNewBlock) {
                    block.insertAfter(addSpending);
                }

                addSpending.find('.value').val('');
                addSpending.find('.date').datepicker('setDate', _now);
                addSpending.find('.category').find('option[value="0"]').prop('selected', true);
            });
        })
    }

    init();
})(jQuery);