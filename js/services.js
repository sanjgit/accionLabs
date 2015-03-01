var contextRoot = "/rtd";

services.factory('OpportunityService', function($resource) {
	return {
		Opportunities : $resource(contextRoot + '/home', {}, {
			'post' : {
				method : 'POST',
				isArray : true
			}
		}),
		Ranges : $resource(contextRoot + '/home/ranges', {}, {
			'post' : {
				method : 'POST',
				isArray : true
			}
		})

	}
});
services.factory('singleMetricService', function ($resource) {
    return {
        singleMetric: $resource(contextRoot + '/comparison/singleMetric', {}, { 'post': { method: 'POST', isArray: true } }),
        quintiles: $resource(contextRoot + '/comparison/quintiles', {}, { 'post': { method: 'POST', isArray: true } })
    }
});
services.factory('ComparisonService', function($resource) {
	return {
		Compare : $resource(contextRoot + '/comparison/defaultSet', {}, {
			'post' : {
				method : 'POST',
				isArray : true
			}
		}),
		AddProduct : $resource(contextRoot + '/comparison/addProductOptions', {}, {
			'post' : {
				method : 'POST',
				isArray : true
			}
		})
	}
});

services.factory('EvaluateService', function($resource) {
	return {
		Evaluate : $resource(contextRoot + '/home/evaluate', {}, {
			'post' : {
				method : 'POST',
				isArray : true
			}
		}),
		promoCharts: $resource(contextRoot + '/charts', {}, {
		    'post': {
		        method: 'POST',
		        isArray: true
		    }
		}),
	}
});
// service for read locale
services.factory('localeServices', [ 'locale', function(locale) {
	// declare the locale
	locale.ready('common').then(function() {
	});
	return {
		getMessage : function(key) {
			return locale.getString(key);
		}
	}
} ]);

services.factory('DimensionService', function($resource) {
	return {
		Dimensions : $resource(contextRoot + '/reports/dimensions/:clientId', {
			userId : '@clientId'
		}),
		Vendors : $resource(contextRoot + '/reports/dimensions/vendors',{}, {
			'post' : {
				method : 'POST',
				isArray : true
			}
		})
	}
});

services.factory('PostDataService', function() {
	var _postData = {
		"storyReportId" : "conagra",
		"levels" : [ "all" ]
	};
	return {
		postData : _postData
	};
});

services.factory('sharedProperties', function () {
    var productDetails = null;
    var promoChartData=null;
    return {
        setSelectedProduct: function (productData) {
            productDetails = productData;
        },getSelectedProduct: function () {
            return productDetails;
        },

        setPromoChartData:function(chartData){
            promoChartData = chartData;
        },
        getPromoChartData: function () {
            return promoChartData;
        },

        setchartType: function (chartTypeData) {
            chartType = chartTypeData;
        }, getchartType: function () {
            return chartType;
        }


    }
});
