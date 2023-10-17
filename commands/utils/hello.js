const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Replies with salutation!'),
	async execute(interaction) {
            // interaction.user is the object representing the User who ran the command
            // interaction.member is the GuildMember object, which represents the user in the specific guild
            await interaction.reply(`Hello, ${interaction.user.username}!`);
	},
};

