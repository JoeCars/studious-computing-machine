const { Schema, model } = require('mongoose');

const FeedConfigSchema = new Schema(
   {
      _id: Schema.Types.ObjectId,
      guildId: {
         type: String,
         required: true,
      },
      channelId: {
         type: String,
         required: true,
      },
      eventName: {
         type: String,
         enum: [
            'auctionBid',
            'auctionCreated',
            'newPost',
            'nounCreated',
            'propCreated',
            'propStatusChange',
            'propVoteCast',
            'transferNoun',
         ],
         required: true,
      },
   },
   {
      statics: {
         async findChannels(eventName) {
            return this.find({ eventName: eventName }).exec();
         },
         async findFeedsInGuild(guildId) {
            return this.find({ guildId: guildId }).exec();
         },
         async findFeedsInChannel(guildId, channelId) {
            return this.find({ guildId: guildId, channelId: channelId }).exec();
         },
      },
   },
);

module.exports = model('FeedConfig', FeedConfigSchema);
