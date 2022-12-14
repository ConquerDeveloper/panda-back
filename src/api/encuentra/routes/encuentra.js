'use strict';

/**
 * encuentra router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::encuentra.encuentra');
