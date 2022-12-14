'use strict';

/**
 * encuentra controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::encuentra.encuentra');
