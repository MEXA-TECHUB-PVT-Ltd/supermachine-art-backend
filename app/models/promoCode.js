const sql = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const PromoCode = function (PromoCode) {
	this.SubscriptionPlanID = PromoCode.SubscriptionPlanID;
	this.code = PromoCode.code;
	this.discount = PromoCode.discount
	this.expiry = PromoCode.expiry;
};
// CONSTRAINT subscriptionplanid FOREIGN KEY (subscriptionplanid)
//         REFERENCES public."StyleTags" (id) MATCH SIMPLE
//         ON UPDATE NO ACTION
//         ON DELETE CASCADE
//         NOT VALID
PromoCode.create = async (req, res) => {
	sql.query(`CREATE TABLE IF NOT EXISTS public.PromoCode (
        id SERIAL NOT NULL,
		SubscriptionPlanID SERIAL NOT NULL,
        code text ,
        discount text,
		expiry text ,
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
			if (!req.body.code || req.body.code === '') {
				res.json({
					message: "Please Enter your code name",
					status: false,
				});
			} else if (!req.body.discount) {
				res.json({
					message: "Please Enter discount",
					status: false,
				});
			} else {
				const { SubscriptionPlanID, code, discount, expiry } = req.body;
				const query = `INSERT INTO "promocode" (id,SubscriptionPlanID, code,discount,expiry, createdAt ,updatedAt )
                            VALUES (DEFAULT, $1, $2, $3, $4, 'NOW()','NOW()' ) RETURNING * `;
				const foundResult = await sql.query(query,
					[SubscriptionPlanID, code, discount, expiry]);
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
							message: "Promo Code Added Successfully!",
							status: true,
							result: foundResult.rows,
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



PromoCode.viewSpecific = (req, res) => {
	sql.query(`SELECT * FROM "promocode" WHERE ( id = $1)`, [req.body.id], (err, result) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "PromoCode Details",
				status: true,
				result: result.rows
			});
		}
	});
}

PromoCode.viewAll = (req, res) => {
	sql.query(`SELECT * FROM PromoCode;`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "PromoCode Details",
				status: true,
				result: result.rows,
			});
		}
	});

}


PromoCode.update = async (req, res) => {
	if (req.body.id === '') {
		res.json({
			message: "id is required",
			status: false,
		});
	} else {
		const PromoCodeData = await sql.query(`select * from "promocode" where id = $1`, [req.body.id]);
		const oldcode = PromoCodeData.rows[0].code;
		const olddiscount = PromoCodeData.rows[0].discount;
		const oldexpiry = PromoCodeData.rows[0].expiry;

		let { id, code, discount, expiry } = req.body;

		if (code === undefined || code === '') {
			code = oldcode;
		}
		if (discount === undefined || discount === '') {
			discount = olddiscount;
		}
		if (expiry === undefined || expiry === '') {
			expiry = oldexpiry;
		}
		sql.query(`UPDATE "promocode" SET  code = $1, 
		discount = $2, expiry = $3  WHERE id = $4;`,
			[code, discount, expiry, id], async (err, result) => {
				if (err) {
					res.json({
						message: "Try Again",
						status: false,
						err
					});
				} else {
					if (result.rowCount === 1) {
						const data = await sql.query(`select * from "promocode" where id = $1`, [req.body.id]);
						res.json({
							message: "PromoCode Updated Successfully!",
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


PromoCode.delete = async (req, res) => {
	const data = await sql.query(`select * from "promocode" where id = $1`, [req.params.id]);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM "promocode" WHERE id = $1;`, [req.params.id], (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					status: false,
					err
				});
			} else {
				res.json({
					message: "Promo Code Deleted Successfully!",
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
module.exports = PromoCode;