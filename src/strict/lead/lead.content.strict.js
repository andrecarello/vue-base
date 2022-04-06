import * as Validator from "validatorjs";
import LeadAttendantStrict from "./lead.attendant.strict";

const rules = {
    id: "required",
    user_id: "present",
    name: "required",
    email: "present",
    phone: "present",
    cpf: "present",
    cnpj: "present",
    cpfCnpj: "present",
    attendant: "present"
}

export default class LeadContentStrict {
    constructor(args) {
        if (_.isEmpty(args)) return;

        const validate = LeadContentStrict.validate(args);

        if (validate.fails()) return console.error("Lead Content Strict has error => ", args, validate.errors)

        args.attendant = this.setupAttendant(args);
        this.data = args;
    }

    static validate (args) {
        return new Validator(args, rules);
    }

    get id () { return this.data.id ?? "" }
    get name () { return this.data.name ?? "" }
    get email () { return this.data.email ?? "" }
    get attendant () { return this.data.attendant ?? {} }
    get hasAttendant () { return !_.isEmpty(this.data.attendant) }

    setupAttendant({ attendant }) {
        if (_.isEmpty(attendant)) return {};
        return new LeadAttendantStrict(attendant);
    }
}