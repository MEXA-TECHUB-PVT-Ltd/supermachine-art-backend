
const {sql} = require("../config/db.config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SubscriptionPlan = function (SubscriptionPlan) {
	this.name = SubscriptionPlan.name;
	this.price = SubscriptionPlan.price;
	this.userType = SubscriptionPlan.userType
	this.noOfUsers = SubscriptionPlan.noOfUsers;
	this.noOfImagesGenerates = SubscriptionPlan.noOfImagesGenerates;
	this.validity = SubscriptionPlan.validity;
	this.freeTrail = SubscriptionPlan.freeTrail;
	this.freeTrailDays = SubscriptionPlan.freeTrailDays;
	this.feature = SubscriptionPlan.feature;

};
SubscriptionPlan.create = async (req, res) => {
	sql.query(`CREATE TABLE IF NOT EXISTS public.SubscriptionPlan (
        id SERIAL NOT NULL,
		name text,
        price text ,
        userType text,
		noOfUsers text,
		noOfImagesGenerates text ,
        validity text ,
        freeTrail text,
		freeTrailDays text,
		feature text,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id))  ` , async (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				status: false,
				err
			});
		} else {
			if (!req.body.name || req.body.name === '') {
				res.json({
					message: "Please Enter name",
					status: false,
				});
			} else if (!req.body.validity) {
				res.json({
					message: "Please Enter validity",
					status: false,
				});
			} else {
				const { name, price, userType,noOfUsers ,noOfImagesGenerates, 
					validity,freeTrail, freeTrailDays, feature } = req.body;
				const query = `INSERT INTO "subscriptionplan"
				 (id,name, price,userType,noOfUsers,noOfImagesGenerates,validity ,freeTrail , freeTrailDays,feature ,createdAt ,updatedAt )
                            VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9 , 'NOW()','NOW()' ) RETURNING * `;
				const foundResult = await sql.query(query,
					[name, price, userType, noOfUsers, noOfImagesGenerates, validity, freeTrail, freeTrailDays, feature]);
				if (foundResult.rows.length > 0) {
					if (err) {
						res.json({
							message: "Try Again",
							freeTrailDays: false,
							err
						});
					}
					else {
						res.json({
							message: "Subscription Plan Added Successfully!",
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

SubscriptionPlan.viewSpecificPlan = (req, res) => {
	sql.query(`SELECT * FROM "subscriptionplan" WHERE ( id = $1)`, [req.body.id], (err, result) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				freeTrailDays: false,
				err
			});
		} else {
			res.json({
				message: "Subscription Plan Details",
				freeTrailDays: true,
				result: result.rows
			});
		}
	});
}
SubscriptionPlan.viewSubscriptionPlanbyUserType = (req, res) => {
	sql.query(`SELECT * FROM "subscriptionplan" WHERE ( userType = $1)`, [req.body.userType], (err, result) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				freeTrailDays: false,
				err
			});
		} else {
			res.json({
				message: "Subscription Plan Details",
				freeTrailDays: true,
				result: result.rows
			});
		}
	});
}

SubscriptionPlan.viewSubscriptionPlanFreeTrail = (req, res) => {
	sql.query(`SELECT * FROM "subscriptionplan" WHERE ( freeTrail = $1)`, ['yes'], (err, result) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				freeTrailDays: false,
				err
			});
		} else {
			res.json({
				message: "Subscription Plan Details",
				freeTrailDays: true,
				result: result.rows
			});
		}
	});
}


SubscriptionPlan.viewPayments = async function (req, res) {
	const { noOfImagesGenerates, validity, newvalidity } = req.body;
	// const hashvalidity = await bcrypt.hash(newvalidity, salt);
	// const oldvalidity = await bcrypt.hash(validity, salt);
	sql.query(`SELECT * FROM "subscriptionplan" WHERE noOfImagesGenerates = $1`, [noOfImagesGenerates], async (err, results) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				freeTrailDays: false,
				err
			});
		}
		else {
			if (results.rows.length == 0) {
				res.json({
					message: "SubscriptionPlan Not Found",
					freeTrailDays: false,
				});
			} else {
				if (bcrypt.compareSync(req.body.validity, results.rows[0].validity)) {
					const salt = await bcrypt.genSalt(10);
					const hashvalidity = await bcrypt.hash(newvalidity, salt);
					sql.query(`UPDATE "subscriptionplan" SET validity = $1 WHERE id = $2`, [hashvalidity, results.rows[0].id], (err, result) => {
						if (err) {
							console.log(err);
							res.json({
								message: "Try Again",
								freeTrailDays: false,
								err
							});
						}
						else {
							res.json({
								message: "validity Changed Successfully",
								freeTrailDays: true,
								results: results.rows
							});
						}
					})
				}
				else {
					res.json({
						message: "Incorrect validity",
						freeTrailDays: false,
					});
				}

			}
		}
	});

}


SubscriptionPlan.viewAllPlans = (req, res) => {
	sql.query(`SELECT * FROM "subscriptionplan" `, (err, result) => {
		if (err) {
			console.log(err);
			res.json({
				message: "Try Again",
				freeTrailDays: false,
				err
			});
		} else {
			res.json({
				message: "SubscriptionPlan Details",
				freeTrailDays: true,
				result: result.rows
			});
		}
	});
}

SubscriptionPlan.ViewAllBlockedSubscriptionPlans = (req, res) => {
	sql.query(`SELECT * FROM "subscriptionplan" WHERE freeTrailDays = $1`, ['block'], (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				freeTrailDays: false,
				err
			});
		} else {
			res.json({
				message: "SubscriptionPlan Details",
				freeTrailDays: true,
				result: result.rows
			});
		}
	});
}
SubscriptionPlan.ViewAllSubscribedSubscriptionPlan = (req, res) => {
	sql.query(`SELECT * FROM "subscriptionplan" WHERE freeTrail = $1`, ['subscriber'], (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				freeTrailDays: false,
				err
			});
		} else {
			res.json({
				message: "Subscribed SubscriptionPlan Details",
				freeTrailDays: true,
				result: result.rows
			});
		}
	});
}

SubscriptionPlan.SpecificSubscriptionPlan = (req, res) => {
	sql.query(`SELECT * FROM "subscriptionplan" WHERE id = $1`, [req.body.id], (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				freeTrailDays: false,
				err
			});
		} else {
			res.json({
				message: "Subscribed SubscriptionPlan Details",
				freeTrailDays: true,
				result: result.rows
			});
		}
	});
}
SubscriptionPlan.AllMemberSubscriptionPlans = (req, res) => {
	sql.query(`SELECT * FROM "subscriptionplan" WHERE freeTrail = $1`, ['member'], (err, result) => {
		if (err) {
			res.json({
				message: "Try Again",
				freeTrailDays: false,
				err
			});
		} else {
			res.json({
				message: "Subscribed SubscriptionPlan Details",
				freeTrailDays: true,
				result: result.rows
			});
		}
	});
}
SubscriptionPlan.changefreeTrailDays = (req, res) => {
	if (req.body.freeTrailDays === '') {
		res.json({
			message: "Please Enter freeTrailDays",
			freeTrailDays: false,
		});
	} else {
		sql.query(`UPDATE "subscriptionplan" SET freeTrailDays = $1 WHERE id = $2;`, [req.body.freeTrailDays, req.body.id], async (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					freeTrailDays: false,
					err
				});
			} else {
				if (result.rowCount === 1) {
					const data = await sql.query(`select * from "subscriptionplan" where id = $1`, [req.body.id]);
					res.json({
						message: "SubscriptionPlan Updated Successfully!",
						freeTrailDays: true,
						result: data.rows,
					});
				} else if (result.rowCount === 0) {
					res.json({
						message: "Not Found",
						freeTrailDays: false,
					});
				}
			}
		});
	}
}

SubscriptionPlan.update = async (req, res) => {
	if (req.body.id === '') {
		res.json({
			message: "id is required",
			freeTrailDays: false,
		});
	} else {
		const SubscriptionPlanData = await sql.query(`select * from "subscriptionplan" where id = $1`, [req.body.id]);
		const oldName = SubscriptionPlanData.rows[0].name;
		const oldprice = SubscriptionPlanData.rows[0].price;
		const olduserType = SubscriptionPlanData.rows[0].userType;
		const oldnoOfUsers = SubscriptionPlanData.rows[0].noOfUsers;
		const oldnoOfImagesGenerates = SubscriptionPlanData.rows[0].noOfImagesGenerates;
		const oldvalidity = SubscriptionPlanData.rows[0].validity;
		const oldfreeTrail = SubscriptionPlanData.rows[0].freeTrail;
		const oldfreeTrailDays = SubscriptionPlanData.rows[0].freeTrailDays;
		const oldfeature = SubscriptionPlanData.rows[0].feature;
		let { id, name, price, userType,noOfUsers, noOfImagesGenerates , validity, freeTrail, freeTrailDays , feature} = req.body;
		if (name === undefined || name === '') {
			name = oldName;
		}
		if (price === undefined || price === '') {
			price = oldprice;
		}
		if (userType === undefined || userType === '') {
			userType = olduserType;
		}
		if (noOfUsers === undefined || noOfUsers === '') {
            noOfUsers = oldnoOfUsers;
        }
		if (noOfImagesGenerates === undefined || noOfImagesGenerates === '') {
			noOfImagesGenerates = oldnoOfImagesGenerates;
		}
		if (validity === undefined || validity === '') {
            validity = oldvalidity;
        }
		if (freeTrail === undefined || freeTrail === '') {
            freeTrail = oldfreeTrail;
        }
		if (freeTrailDays === undefined || freeTrailDays === '') {
            freeTrailDays = oldfreeTrailDays;
        }
		if (feature === undefined || feature === '') {
            feature = oldfeature;
        }
		sql.query(`UPDATE "subscriptionplan" SET name = $1, price = $2, 
		userType = $3, noOfUsers = $4, noOfImagesGenerates = $5, validity = $6, freeTrail = $7,
		freeTrailDays = $8, feature = $9  WHERE id = $10;`,
			[name, price, userType, noOfUsers, noOfImagesGenerates, validity, freeTrail, freeTrailDays ,feature, id], async (err, result) => {
				if (err) {
					console.log(err);
					res.json({
						message: "Try Again",
						freeTrailDays: false,
						err
					});
				} else {
					if (result.rowCount === 1) {		
						const data = await sql.query(`select * from "subscriptionplan" where id = $1`, [req.body.id]);
						res.json({
							message: "Subscription Plan Updated Successfully!",
							freeTrailDays: true,
							result: data.rows,
						});
					} else if (result.rowCount === 0) {
						res.json({
							message: "Not Found",
							freeTrailDays: false,
						});
					}
				}
			});
	}
}


SubscriptionPlan.delete = async (req, res) => {
	const data = await sql.query(`select * from "subscriptionplan" where id = $1`, [req.params.id]);
	if (data.rows.length === 1) {
		sql.query(`DELETE FROM "subscriptionplan" WHERE id = $1;`, [req.params.id], (err, result) => {
			if (err) {
				res.json({
					message: "Try Again",
					freeTrailDays: false,
					err
				});
			} else {
				res.json({
					message: "Subscription Plan Deleted Successfully!",
					freeTrailDays: true,
					result: data.rows,

				});
			}
		});
	} else {
		res.json({
			message: "Not Found",
			freeTrailDays: false,
		});
	}
}
module.exports = SubscriptionPlan;