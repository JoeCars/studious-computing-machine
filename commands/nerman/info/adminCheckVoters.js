const { CommandInteraction } = require('discord.js');
const { log: l } = console;
// const { lc } = require('../../../utils/functions');
module.exports = {
   subCommand: 'nerman.admin-check-voters',
   /**
    *
    * @param {CommandInteraction} interaction
    */
   async execute(interaction) {
      const {
         channelId,
         member: {
            roles: { cache: userRoleCache },
         },
         guild: {
            members: guildMembers,
            members: { cache: mCache },
         },
      } = interaction;

      await interaction.deferReply({ ephemeral: true });

      if (!userRoleCache.has('919784986641575946'))
         throw new Error('This is an admin-only command');

      const checkingRole = interaction.options.getString('role-name');

      let fetchedMembers = await guildMembers.fetch();

      if (checkingRole !== null) {
         fetchedMembers = fetchedMembers.filter(member => {
            // l('HOIYA');
            // l(member.roles.cache);
            // l(member.roles.cache.name);

            // l(member.roles.cache.find(role => role.name === checkingRole));

            return member.roles.cache.find(role => role.name === checkingRole);
         });
      }

      // l({ interaction });
      l({ checkingRole });
      // l({ userRoleCache });

      // l({ mCache });
      l({ fetchedMembers });

      let userArray = [];

      fetchedMembers.forEach(
         ({ id, nickname, user: { username, discriminator } }) => {
            l(id, nickname, username, discriminator);

            userArray.push({
               id,
               nickname,
               username,
               discriminator,
               fullName:
                  nickname !== null
                     ? `${nickname}#${discriminator}`
                     : `${username}#${discriminator}`,
            });
         }
      );

      l({ userArray });

      interaction.editReply({ content: 'Done.' });
   },
};
