"use strict";
const _ = require("lodash");

/**
 * applied-for-job controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::applied-for-job.applied-for-job');

/**
 * user-request controller
 */

module.exports = createCoreController(
  "api::applied-for-job.applied-for-job",
  ({ strapi }) => ({
    async create(ctx) {
      const response = await super.create(ctx);

      const emailTemplate2 = {
        subject: "New Request for call from <%= user.Name %>",

        text: `You got a new request for call <%= user.Name %> from metaversitytechnologies.com.<br />
  Name: <%= user.Name %>.
   <br />Email: <%= user.Email %>. 
   <br /> Contact: <%= user.Phone %> .
   <br /> Query: <%= user.Message %>. 
    Your account is now linked with: <%= user.Email %>.`,

        html: `<h1>Welcome to Metaversity Technologies!</h1>
    <p>Your account is now linked with: <%= user.Email %>.<p>
    <p><strong>
  Name: <%= user.Name %><br />
   Email: <%= user.Email %> <br />
   Contact: <%= user.Phone %> .<br />
    Query: <%= user.Message %>. 
  <br />
  </strong></p>`,
      };
      const user = response.data.attributes;
      // console.log(response);
      //   try {
      //     strapi.plugins["email"].services.email.sendTemplatedEmail(
      //       {
      //         to: user.email,
      //       },
      //       emailTemplate,
      //       {
      //         user: _.pick(user, ["name", "email", "contact","Phone","Message"]),
      //       }
      //     );
      //   } catch (e) {
      //     console.log(e);
      //   }
      
      // console.log( _.pick(user, [
      //   "Name",
      // ]),"name")
      try {
        strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: process.env.EMAIL_ADDRESS_REPLY,
          },
          emailTemplate2,
          {
            user: _.pick(user, [
              "Name",
              "Email",
              "Phone",
              "Message",
              "createdAt",
            ]),
          }
        );
      } catch (e) {
        // console.log(e);
      }
      return response;
    },
  })
);
