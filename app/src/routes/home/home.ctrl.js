"use strict"

const output = {
	home: (req,res) => {
		res.render("home/index");
	},
	login: (req,res) => {
	res.render("home/login");
	},
};

const users = {
	id: ["jjp011211", "기모찌", "팀장님"],
	pw: ["1234", "12345", "123456"],
};

const process = {
	login: (req, res) => {
		const id = req.body.id
			pw = req.body.pw;
		
		if (users.id.includes(id)) {
			const idx = users.id.index0f(id);
			if (users.pw[idx] === pw) {
				return res.json({
				success: true,
				});
			}
		}
		
		return res.json({
			success: false,
			msg: "로그인에 실패하셨습니다.",
		});
	},
};


module.exports = {
	output,
	process,
};