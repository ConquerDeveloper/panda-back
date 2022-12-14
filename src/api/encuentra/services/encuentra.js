'use strict';

/**
 * encuentra service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::encuentra.encuentra');
