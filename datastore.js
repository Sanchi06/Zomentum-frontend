let user = {
	id: 0,
	name: "Lulu",
	number: "+91 885681 3458",
	pic: "img/n67ykupn8ha51.jpg",
	about: "busy!"
};

let contactList = [
	{
		id: 0,
		name: "Lulu",
		number: "+91 885681 3458",
		pic: "img/n67ykupn8ha51.jpg",
		lastSeen: "Aug 30 2020 22:02:30"
	},
	{
		id: 1,
		name: "Momo",
		number: "+91 845831 5800",
		pic: "img/v556d8hgwjd656g52eg.jpg",
		lastSeen: "Aug 30 2020 22:06:03"
	},
	{
		id: 2,
		name: "Shweta",
		number: "+91 991506 4582",
		pic: "img/download.jpg",
		lastSeen: "Aug 30 2020 23:23:23"
	},
	{
		id: 3,
		name: "TT",
		number: "+91 845612 4521",
		pic: "img/panda.jpg",
		lastSeen: "Aug 30 2020 03:03:03"
	},
	{
		id: 4,
		name: "DD",
		number: "+91 785647 2456",
		pic: "img/pug.jpg",
		lastSeen: "Aug 30 2020 00:23:02"
	},
	{
		id: 5,
		name: "Coco",
		number: "+91 854623 2145",
		pic: "img/sloth.jpg",
		lastSeen: "Aug 30 2020 12:15:02"
	},
	{
		id: 6,
		name: "Dodo",
		number: "+91 858623 3685",
		pic: "img/d8e.png",
		lastSeen: "Aug 30 2020 21:15:12"
	}

];

let groupList = [
	{
		id: 1,
		name: "ZOMENTUM",
		members: [0, 1, 2, 3, 4, 5, 6],
		pic: "img/0.png"
	},
	{
		id: 2,
		name: "Frontend",
		members: [0, 2],
		pic: "img/ft.png"
	},
	{
		id: 3,
		name: "snipits",
		members: [0,1,4],
		pic: "img/ft.png"
	}
];

/*
sender:- who sent the text
status :-
 sent->0
 delivered -> 1
 read -> 2
 recvId :- who recieved the message
 recvIsGroup:- is it group or not*/

let messages = [
	{
		id: 0,
		sender: 5,
		body: "I'm sorry, why did you call me?",
		time: "Aug 30 2020 10:23:02",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 1,
		sender: 5,
		body: "I was busy",
		time: "Aug 30 2020 10:23:02",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 2,
		sender: 2,
		body: "Lets do it",
		time: "Aug 30 2020 20:23:02",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	},
	{
		id: 3,
		sender: 1,
		body: "OKAY",
		time: "Aug 30 2020 20:23:02",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	},
	{
		id: 4,
		sender: 0,
		body: "whats the submission date?",
		time: "Aug 30 2020 21:00:02",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	},
	{
		id: 5,
		sender: 1,
		body: "Tomorrow by 11am",
		time: "Aug 30 2020 21:23:02",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	},
	{
		id: 6,
		sender: 0,
		body: "Lets go for a movie",
		time: "Aug 30 2020 18:23:02",
		status: 2,
		recvId: 2,
		recvIsGroup: false
	},

	{
		id: 7,
		sender: 0,
		body: "hey",
		time: "Aug 30 2020 15:23:02",
		status: 2,
		recvId: 6,
		recvIsGroup: false
	},

	{
		id: 8,
		sender: 3,
		body: "When you gonna come by?",
		time: "Aug 29, 2020 21:05:11",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 9,
		sender: 0,
		body: "Movie tonight?",
		time: "Aug 30 2020 08:00:02",
		status: 0,
		recvId: 3,
		recvIsGroup: true
	},
	{
		id: 10,
		sender: 1,
		body: "Okay bring some food over",
		time: "Aug 30 2020 10:23:02",
		status: 0,
		recvId: 3,
		recvIsGroup: true
	},
	{
		id: 11,
		sender: 0,
		body: "HEY ill be there tonight",
		time: "Aug 30, 2020 21:17:03",
		status: 1,
		recvId: 3,
		recvIsGroup: false
	},
	{
		id: 12,
		sender: 3,
		body: "COOL",
		time: "Aug 30, 2020 18:20:11",
		status: 0,
		recvId: 2,
		recvIsGroup: true
	},
	{
		id: 13,
		sender: 1,
		body: "Hows work?",
		time: "Aug 30, 2020 22:03:01",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 14,
		sender: 0,
		body: "Where are you?",
		time: "Aug 30, 2020 10:03:01",
		status: 2,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 15,
		sender: 2,
		body: "home",
		time: "Aug 30, 2020 12:03:01",
		status: 2,
		recvId: 2,
		recvIsGroup: false
	},
	

	{
		id: 16,
		sender: 0,
		body: "nope",
		time: "Aug 30, 2020 02:03:01",
		status: 1,
		recvId: 4,
		recvIsGroup: false
	}
	
];

let MessageUtils = {
	getByGroupId: (groupId) => {
		return messages.filter(msg => msg.recvIsGroup && msg.recvId === groupId);
	},
	getByContactId: (contactId) => {
		return messages.filter(msg => {
			return !msg.recvIsGroup && ((msg.sender === user.id && msg.recvId === contactId) || (msg.sender === contactId && msg.recvId === user.id));
		});
	},
	getMessages: () => {
		return messages;
	},
	changeStatusById: (options) => {
		messages = messages.map((msg) => {
			if (options.isGroup) {
				if (msg.recvIsGroup && msg.recvId === options.id) msg.status = 2;
			} else {
				if (!msg.recvIsGroup && msg.sender === options.id && msg.recvId === user.id) msg.status = 2;
			}
			return msg;
		});
	},
	addMessage: (msg) => {
		msg.id = messages.length + 1;
		messages.push(msg);
	}
};