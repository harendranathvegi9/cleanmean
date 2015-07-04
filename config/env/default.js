/**
 * @copyright SIELAY Ltd
 * MIT
 */

'use strict';

module.exports = {
	app: {
		title: 'CleanMean',
		description: 'How I like MEANJS to be',
		keywords: 'type some cool words here',
		googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions'
};
