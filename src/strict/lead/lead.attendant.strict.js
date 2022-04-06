import * as Validator from "validatorjs";

const rules = {
    id: "required",
    name: "present",
    image: "present"
}

export default class LeadAttendantStrict {
    constructor(args) {
        if (_.isEmpty(args)) return;

        const validate = LeadAttendantStrict.validate(args);

        if (validate.fails()) return console.error("Lead Attendant Strict has error => ", args, validate.errors);
        this.data = args;
    }

    static validate (args) {
        return new Validator(args, rules);
    }

    get id () { return this.data.id ?? "" }
    get name () { return this.data.name ?? "" }
    get hasName () { return !!this.data.name }
    get image () { return this.data.image ?? "" }
    get hasImage () { return !_.isNull(this.data.image) }
}