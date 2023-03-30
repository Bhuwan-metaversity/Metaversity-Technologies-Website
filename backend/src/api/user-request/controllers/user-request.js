"use strict";
const _ = require("lodash");

/**
 * user-request controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::user-request.user-request",
  ({ strapi }) => ({
    async create(ctx) {
      const response = await super.create(ctx);

      const emailTemplate = {
        subject: "Welcome <%= user.name %>",
        text: `Welcome to Metaversity Technologies!
    Your account is now linked with: <%= user.email %>.`,
        html: `<h1>Welcome to Metaversity Technologies!</h1>
    <p>Your account is now linked with: <%= user.email %>.<p>
    <p>We have recieved your query and will try to respond to your request as soon as possible.</p>`,
      };
      const emailTemplate2 = {
        subject: "New Request for call from <%= user.name %>",
        text: `You got a new request for call <%= user.name %> from metaversitytechnologies.com.<br />
  Name: <%= user.name %>. <br />Email: <%= user.email %>. <br /> Contact: <%= user.contact %> .<br /> Query: <%= user.question %>. 
    Your account is now linked with: <%= user.email %>.`,
        html: `<h1>Welcome to Metaversity Technologies!</h1>
    <p>Your account is now linked with: <%= user.email %>.<p>
    <p><strong>
  Name: <%= user.name %><br /> Email: <%= user.email %> <br />Contact: <%= user.contact %> .<br /> Query: <%= user.question %>. 
  <br />
  </strong></p>`,
      };
      const user = response.data.attributes;
      try {
        strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: user.email,
          },
          emailTemplate,
          {
            user: _.pick(user, ["name", "email", "contact", "question"]),
          }
        );
      } catch (e) {
        // console.log(e);
      }
      try {
        strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: process.env.EMAIL_ADDRESS_REPLY,
          },
          emailTemplate2,
          {
            user: _.pick(user, ["name", "email", "contact", "question"]),
          }
        );
      } catch (e) {
        // console.log(e);
      }
      return response;
    },
  })
);


