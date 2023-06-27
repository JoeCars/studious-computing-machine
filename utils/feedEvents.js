const events = new Map();
events.set('auctionBid', 'NounsDAO.AuctionBid');
events.set('auctionCreated', 'NounsDAO.AuctionCreated');
events.set('newPost', 'NounsNymz.NewPost');
events.set('nounCreated', 'NounsDAO.NounCreated');
events.set('propCreated', 'NounsDAO.PropCreated');
events.set('propStatusChange', 'NounsDAO.PropStatusChange');
events.set('propVoteCast', 'NounsDAO.PropVoteCast');
events.set('transferNoun', 'NounsDAO.TransferNoun');
module.exports = events;
