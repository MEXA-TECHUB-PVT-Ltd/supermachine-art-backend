const db = require("../../models");
const FAQs = db.FAQS;
const ViewFAQs = async (req, res) => {
	try {

// 		SELECT "faqs".id,"faqs".question,"faqs".answer,
// 		(SELECT count(l.likes) 
// 		 FROM FAQsLikes AS l
// 		 WHERE e.empid = p.empid
// 		) AS phonenumbers 
//  FROM 
//  (SELECT * FROM employee ORDER BY empname LIMIT 3 OFFSET 0) AS e 
//  ORDER BY e.empname ;
 
//  -- let query = `SELECT
//  -- 		"faqs".id,
//  -- 		"faqs".question,
//  -- 		"faqs".answer,
//  -- 		"FAQsDislikes".dislikes, 
//  -- 		"FAQsLikes".likes
//  -- 	  FROM "faqs" LEFT JOIN "FAQsLikes"
//  -- 		ON "faqs".id = "FAQsLikes"."faqsId"
//  -- 	 	LEFT JOIN "FAQsDislikes"
//  -- 		ON "faqs".id = "FAQsDislikes"."faqsId"`

	// 	let query = `SELECT
	// 	"faqs".id,
	// 	"faqs".question,
	// 	"faqs".answer,
	// 	"FAQsDislikes".dislikes, 
	// 	"FAQsLikes".likes
	//   FROM "faqs" LEFT JOIN "FAQsLikes"
	// 	ON "faqs".id = "FAQsLikes"."faqsId"
	//  	LEFT JOIN "FAQsDislikes"
	// 	ON "faqs".id = "FAQsDislikes"."faqsId"`;
	// 	const [result] = await db.sequelize.query(query);
		// const [results] = await db.sequelize.query(query);
		const result = await FAQs.findAll({
			order: [
			  ["id", "ASC"],
			],
		  });
		if (!result) {
			res.json({
				message: "No FAQs found",
				status: false,
			});
		} else {
			res.json({
				message: "FAQs data",
				status: true,
				result
			});
		}
	} catch (err) {
		res.json({
			message: "Try Again",
			status: false,
		});
	}
};
module.exports = ViewFAQs;