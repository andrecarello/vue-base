import * as Validator from "validatorjs";
import LeadContentStrict from "./lead/lead.content.strict";

const rules = {
    card_id: "required",
    step_id: "required",
    position: "present",
    lead_content: "required"
}

export default class LeadStrict {
    constructor(args) {
        if (_.isEmpty(args)) return;

        const validate = LeadStrict.validate(args);

        if (validate.fails()) return console.error("Lead Strict has errors => ", args, validate.errors);

        args.lead_content = this.setupLeadContent(args);
        this.data = args
    }

    static validate (args) {
        return new Validator(args, rules)
    }

    get leadId () { return this.data.card_id ?? "" }
    get stepId () { return this.data.step_id ?? "" }
    get leadContent () { return this.data.lead_content ?? {} }
    get hasLeadContent () { return !_.isEmpty(this.data.lead_content) }

    setupLeadContent ({ lead_content }) {
        return new LeadContentStrict(lead_content);
    }
}