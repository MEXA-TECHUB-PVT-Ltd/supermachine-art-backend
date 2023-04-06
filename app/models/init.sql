
CREATE TABLE IF NOT EXISTS public.admins (
        id SERIAL,
        email text NOT NULL,
        password text,
        createdAt timestamp NOT NULL DEFAULT NOW(),
        updatedAt timestamp DEFAULT NOW(),
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.AdvanceStylings (
        id BIGSERIAL,
        styleType text NOT NULL,
        createdAt timestamp NOT NULL,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.FAQsDislikess (
        id SERIAL,
        faqsId SERIAL NOT NULL,
        userID SERIAL  NOT NULL,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.FAQs (
        id SERIAL NOT NULL,
		question text,
        answer text ,
        likes SERIAL,
		dislikes SERIAL ,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.FAQsLikess (
        id SERIAL,
        faqsId SERIAL NOT NULL,
        userID SERIAL  NOT NULL,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.Folder (
        id SERIAL,
		userID SERIAL NOT NULL,
        name text NOT NULL,
        status text,
        createdAt timestamp NOT NULL,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.GalleryProfile (
        id SERIAL NOT NULL,
		userID SERIAL NOT NULL,
        name text ,
        image text,
		description text ,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.ImageAspects (
        id SERIAL,
        name text NOT NULL,
        resolution text,
        createdAt timestamp NOT NULL,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.ImageFilters (
        id SERIAL,
        name text NOT NULL,
        status text,
        createdAt timestamp NOT NULL,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.Images (
                id SERIAL NOT NULL,
                userID SERIAL NOT NULL ,
                FolderID text,
                name text,
                FolderStatus text,
                image text ,
                seedID text ,
                createdAt timestamp,
                updatedAt timestamp ,
                PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.ImageSizeRatios (
        id SERIAL,
        imageSize text NOT NULL,
        createdAt timestamp NOT NULL,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.LicenseAgreements (
        id SERIAL,
        title text NOT NULL,
        content text,
        createdAt timestamp NOT NULL,
        updatedAt timestamp ,
        PRIMARY KEY (id));


CREATE TABLE IF NOT EXISTS public.otp (
            id SERIAL,
            email text,
            otp text,
            status text,
            createdAt timestamp NOT NULL,
            updatedAt timestamp ,
            PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.privacyPolicys (
        id SERIAL,
        title text NOT NULL,
        content text,
        createdAt timestamp NOT NULL,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.PromoCode (
        id SERIAL NOT NULL,
		SubscriptionPlanID SERIAL NOT NULL,
        code text ,
        discount text,
		expiry text ,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public."StyleTags"
        (
            id SERIAL  NOT NULL,
            "advancestylingid" SERIAL NOT NULL,
            "tags" text,
            createdAt timestamp NOT NULL,
            updatedAt timestamp ,    
            PRIMARY KEY (id),
            CONSTRAINT "advancestylingid" FOREIGN KEY ("advancestylingid")
                REFERENCES public.advancestylings (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE CASCADE
                NOT VALID
        );

CREATE TABLE IF NOT EXISTS public.SubscriptionPlan (
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
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.subscriptionPlanImageSize (
            id SERIAL,
            SubscriptionPlanID SERIAL NOT NULL,
            ImageSize text,
            SizeID  SERIAL NOT NULL,
            createdAt timestamp NOT NULL,
            updatedAt timestamp ,
            PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.termOfUses (
        id SERIAL,
        title text NOT NULL,
        content text,
        createdAt timestamp NOT NULL,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.UsePromoCode (
        id SERIAL NOT NULL,
		userID SERIAL NOT NULL,
        SubscriptionPlanID SERIAL NOT NULL,
		PromoCodeID SERIAL NOT NULL ,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id)

		);

CREATE TABLE IF NOT EXISTS public.User (
        id SERIAL NOT NULL,
		name text,
        gender text ,
        phone text,
		profileImage text,
		email text ,
        password text ,
        type text,
		status text,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.UsersSubscriptions (
        id SERIAL NOT NULL,
		userID SERIAL NOT NULL,
        name text ,
        email text,
		subscriptionID SERIAL NOT NULL ,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id));


CREATE TABLE IF NOT EXISTS public.UserTypes (
        id SERIAL,
        type text NOT NULL,
        createdAt timestamp NOT NULL,
        updatedAt timestamp ,
        PRIMARY KEY (id));