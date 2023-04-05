const sql = require("./db");

const UsePromoCode = function (UsePromoCode) {
	this.userID = UsePromoCode.userID;
	this.SubscriptionPlanID = UsePromoCode.SubscriptionPlanID
	this.PromoCodeID = UsePromoCode.PromoCodeID;
};
// CONSTRAINT userID FOREIGN KEY (userID)
//         REFERENCES public."StyleTags" (id) MATCH SIMPLE
//         ON UPDATE NO ACTION
//         ON DELETE CASCADE
//         NOT VALID
UsePromoCode.use = async (req, res) => {
	sql.query(`CREATE TABLE IF NOT EXISTS public.UsePromoCode (
        id SERIAL NOT NULL,
		userID SERIAL NOT NULL,
        SubscriptionPlanID SERIAL NOT NULL,
		PromoCodeID SERIAL NOT NULL ,
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
         if (!req.body.SubscriptionPlanID) {
				res.json({
					message: "Please Enter SubscriptionPlanID",
					status: false,
				});
			} else {
				const { userID, SubscriptionPlanID, PromoCodeID } = req.body;
				const query = `INSERT INTO "usepromocode" (id,userID,SubscriptionPlanID,PromoCodeID, createdAt ,updatedAt )
                            VALUES (DEFAULT, $1, $2, $3, 'NOW()','NOW()' ) RETURNING * `;
				const foundResult = await sql.query(query,
					[userID, SubscriptionPlanID, PromoCodeID]);
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
							message: "Promo Code Use Successfully!",
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



UsePromoCode.viewSpecific = (req, res) => {
	sql.query(`SELECT * FROM "UsePromoCode" WHERE ( id = $1)`, [req.body.id], (err, result) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "UsePromoCode Details",
				status: true,
				result: result.rows
			});
		}
	});
}

UsePromoCode.viewAll = (req, res) => {
	sql.query(`SELECT * FROM UsePromoCode;`, (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			res.json({
				message: "UsePromoCode Details",
				status: true,
				result: result.rows,
			});
		}
	});

}


UsePromoCode.update = async (req, res) => {
	if (req.body.id === '') {
		res.json({
			message: "id is required",
			status: false,
		});
	} else {
		const UsePromoCodeData = await sql.query(`select * from "UsePromoCode" where id = $1`, [req.body.id]);
		const oldcode = UsePromoCodeData.rows[0].code;
		const oldSubscriptionPlanID = UsePromoCodeData.rows[0].SubscriptionPlanID;
		const oldPromoCodeID = UsePromoCodeData.rows[0].PromoCodeID;

		let { id, code, SubscriptionPlanID, PromoCodeID } = req.body;

		if (code === undefined || code === '') {
			code = oldcode;
		}
		if (SubscriptionPlanID === undefined || SubscriptionPlanID === '') {
			SubscriptionPlanID = oldSubscriptionPlanID;
		}
		if (PromoCodeID === undefined || PromoCodeID === '') {
			PromoCodeID = oldPromoCodeID;
		}
		sql.query(`UPDATE "UsePromoCode" SET  code = $1, 
		SubscriptionPlanID = $2, PromoCodeID = $3  WHERE id = $4;`,
			[code, SubscriptionPlanID, PromoCodeID, id], async (err, result) => {
				if (err) {
					res.json({
						message: "Try Again",
						status: false,
						err
					});
				} else {
					if (result.rowCount === 1) {
						const data = await sql.query(`select * from "UsePromoCode" where id = $1`, [req.body.id]);
						res.json({
							message: "UsePromoCode Updated Successfully!",
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


UsePromoCode.delete = async (req, res) => {
	const data = await sql.query(`select * from "UsePromoCode" where id = $1`, [req.params.id]);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM "UsePromoCode" WHERE id = $1;`, [req.params.id], (err, result) => {
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
module.exports = UsePromoCode;