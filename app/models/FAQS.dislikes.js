const {sql} = require("../config/db.config");
const FAQsDislikes = function (FAQsDislikes) {
	this.faqsId = FAQsDislikes.faqsId;
	this.userID = FAQsDislikes.userID;;
};

FAQsDislikes.dislikeFAQs = async (req, res) => {
	if (!req.body.FAQID || req.body.FAQID === '') {
		res.json({
			message: "Please Enter your FAQ_ID",
			status: false,
		});
	} else if (!req.body.userID) {
		res.json({
			message: "Please Enter user_ID",
			status: false,
		});
	} else {
		sql.query(`CREATE TABLE IF NOT EXISTS public.FAQsDislikess (
        id SERIAL,
        faqsId SERIAL NOT NULL,
        userID SERIAL  NOT NULL,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id))  ` , (err, result) => 
		{
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				sql.query(`SELECT * FROM FAQsDislikess WHERE faqsid = $1 AND userid = $2`
				, [req.body.FAQID, req.body.userID], async (err, result) => {
					if (err) {
						res.json({
							message: "Try Again",
							status: false,
							err
						});
					} else {
						sql.query(`SELECT * FROM faqs WHERE id = $1`, [req.body.FAQID], async (err, results) => {
						if (result.rows.length > 0) {
							sql.query(`UPDATE "faqs" SET dislikes = $1  WHERE id = $2 `,
							[results.rows[0].dislikes - 1, req.body.FAQID], async (err, result) => {});
											sql.query(`DELETE FROM FAQsDislikess  WHERE faqsid = $1 AND userid = $2`, [req.body.FAQID, req.body.userID], (err, r) => {
								if (err) {
									res.json({
										message: "Try Again",
										status: false,
										err
									});
								} else {
									res.json({
										message: "DisLike Removed Successfully!",
										status: true,
										result: result.rows,

									});
								}
							})
						} else {
							sql.query(`UPDATE "faqs" SET dislikes = $1  WHERE id = $2`,
							[results.rows[0].dislikes +1,req.body.FAQID], async (err, result) => {});
							sql.query(`INSERT INTO FAQsDislikess (id, faqsId, userID, createdAt,updatedAt )
                            VALUES (DEFAULT, $1 ,  $2, 
                            'NOW()', 'NOW()') RETURNING * `, [req.body.FAQID, req.body.userID], (err, result) => {
								if (err) {
									res.json({
										message: "Try Again",
										status: false,
										err
									});
								}
								else {
									res.json({
										message: "disliked Successfully!",
										status: true,
										result: result.rows,
									});
								}
							})
						}
					})

					}
				})
			}
		})
	}
}
module.exports = FAQsDislikes;