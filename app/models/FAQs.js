const {sql} = require("../config/db.config");
const FAQs = function (FAQs) {
	this.question = FAQs.question;
	this.answer = FAQs.answer;
	this.likes = FAQs.likes
	this.dislikes = FAQs.dislikes;
};
// CONSTRAINT question FOREIGN KEY (question)
//         REFERENCES public."StyleTags" (id) MATCH SIMPLE
//         ON UPDATE NO ACTION
//         ON DELETE CASCADE
//         NOT VALID
FAQs.create = async (req, res) => {
	sql.query(`CREATE TABLE IF NOT EXISTS public.FAQs (
        id SERIAL NOT NULL,
		question text,
        answer text ,
        likes SERIAL,
		dislikes SERIAL ,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id)

		)  ` , async (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			if (!req.body.question || req.body.question === '') {
				res.json({
					message: "Please Enter question ",
					status: false,
				});
			} else if (!req.body.answer) {
				res.json({
					message: "Please Enter answer",
					status: false,
				});
			} else {
				const { question, answer } = req.body;
				const query = `INSERT INTO "faqs" (id,question, answer,likes,dislikes, createdAt ,updatedAt )
                            VALUES (DEFAULT, $1, $2, '0', '0', 'NOW()','NOW()' ) RETURNING * `;
				const foundResult = await sql.query(query,
					[question, answer]);
				if (foundResult.rows.length > 0) {
					if (err) {
						res.json({
							message: "Try Again",
							status: false,
							err
						});
					}
					else {
						res.json({
							message: " FAQs Added Successfully!",
							status: true,
							result: foundResult.rows	,
						});
					}
				} else {
					res.json({
						message: "Try Again",
						status: false,
						err
					});
				}

			};
		}

	});
}



FAQs.viewSpecific = (req, res) => {
	sql.query(`SELECT * FROM "faqs" WHERE ( id = $1)`, [req.body.id], (err, result) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "FAQs Details",
				status: true,
				result: result.rows
			});
		}
	});
}

FAQs.viewAll = (req, res) => {

	sql.query(`SELECT * FROM "faqs";`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "FAQs Details",
				status: true,
				result: result.rows,
			});
		}
	});

}


FAQs.update = async (req, res) => {
	if (req.body.id === '') {
		res.json({
			message: "id is required",
			status: false,
		});
	} else {
		const FAQsData = await sql.query(`select * from "faqs" where id = $1`, [req.body.id]);
		const oldanswer = FAQsData.rows[0].answer;
		const oldQuestions = FAQsData.rows[0].question;

		let { id, question , answer } = req.body;
		if (question === undefined || question === '') {
			question = oldQuestions;
		}
		if (answer === undefined || answer === '') {
			answer = oldanswer;
		}
		sql.query(`UPDATE "faqs" SET question = $1, answer = $2 WHERE id = $3;`,
			[question,answer, id], async (err, result) => {
				if (err) {
					res.json({
						message: "Try Again",
						status: false,
						err
					});
				} else {
					if (result.rowCount === 1) {
						const data = await sql.query(`select * from "faqs" where id = $1`, [req.body.id]);
						res.json({
							message: "FAQs Updated Successfully!",
							status: true,
							result: data.rows,
						});
					} else if (result.rowCount === 0) {
						res.json({
							message: "Not Found",
							status: false,
						});
					}
				}
			});
	}
}


FAQs.delete = async (req, res) => {
	const data = await sql.query(`select * from "faqs" where id = $1`, [req.params.id]);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM "faqs" WHERE id = $1;`, [req.params.id], (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: "Promo answer Deleted Successfully!",
					status: true,
					result: data.rows,

				});
			}
		});
	} else {
		res.json({
			message: "Not Found",
			status: false,
		});
	}
}
module.exports = FAQs;