var app = angular.module("app",[]);

app.controller('MainCtrl',function ($scope,$http) {

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?department=Water%20Services&$select=creation_year,count(case_id)&$group=creation_year&$order=creation_year").then(function (value) {

            $scope.kcvalue = value.data;
            console.log($scope.kcvalue);
            $scope.mydata2007 = parseInt($scope.kcvalue[0].count_case_id);
            $scope.mydata2008 = parseInt($scope.kcvalue[1].count_case_id);
            $scope.mydata2009 = parseInt($scope.kcvalue[2].count_case_id);
            $scope.mydata2010 = parseInt($scope.kcvalue[3].count_case_id);
            $scope.mydata2011 = parseInt($scope.kcvalue[4].count_case_id);
            $scope.mydata2012 = parseInt($scope.kcvalue[5].count_case_id);
            $scope.mydata2013 = parseInt($scope.kcvalue[6].count_case_id);
            $scope.mydata2014 = parseInt($scope.kcvalue[7].count_case_id);
            $scope.mydata2015 = parseInt($scope.kcvalue[8].count_case_id);
            $scope.mydata2016 = parseInt($scope.kcvalue[9].count_case_id);
            $scope.mydata2017 = parseInt($scope.kcvalue[10].count_case_id);
            $scope.mydata2018 = parseInt($scope.kcvalue[11].count_case_id);
            drawChartx();

        });


        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChartx);

        function drawChartx() {
            var data = google.visualization.arrayToDataTable([
                ['Year', 'Kansas City', 'NewYork City'],
                ['2010',  $scope.mydata2010,$scope.nyc2010],
                ['2011',  $scope.mydata2011,$scope.nyc2011],
                ['2012',  $scope.mydata2012,$scope.nyc2012],
                ['2013',  $scope.mydata2013,$scope.nyc2013],
                ['2014',  $scope.mydata2014,$scope.nyc2014],
                ['2015',  $scope.mydata2015,$scope.nyc2015],
                ['2016',  $scope.mydata2016,$scope.nyc2016],
                ['2017',  $scope.mydata2017,$scope.nyc2017],
                ['2018',  $scope.mydata2018,$scope.nyc2018]
            ]);

            var options = {
                title: 'Water service requests ',
                curveType: 'function',
                legend: { position: 'bottom' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
        }



        $http.get("https://data.cityofnewyork.us/resource/fhrw-4uyv.json?complaint_type=Water%20Quality&$select=date_extract_y(created_date),count(unique_key)&$group=date_extract_y(created_date)&$order=date_extract_y(created_date)").then(function (value) {

            $scope.nycvalue = value.data;
            console.log($scope.nycvalue);

            $scope.nyc2010 =parseInt($scope.nycvalue[0].count_unique_key);
            $scope.nyc2011 =parseInt($scope.nycvalue[1].count_unique_key);
            $scope.nyc2012 =parseInt($scope.nycvalue[2].count_unique_key);
            $scope.nyc2013 =parseInt($scope.nycvalue[3].count_unique_key);
            $scope.nyc2014 =parseInt($scope.nycvalue[4].count_unique_key);
            $scope.nyc2015 =parseInt($scope.nycvalue[5].count_unique_key);
            $scope.nyc2016 =parseInt($scope.nycvalue[6].count_unique_key);
            $scope.nyc2017 =parseInt($scope.nycvalue[7].count_unique_key);
            $scope.nyc2018 =parseInt($scope.nycvalue[8].count_unique_key);
        });



});