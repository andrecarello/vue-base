import * as Validator from "validatorjs";
// import LeadContentStrict from "./lead/lead.content.strict";

const RULES = {
  login: "required|string",
  id: "required|integer",
  node_id: "required|string",
};

export default class UserStrict {
  constructor(args) {
    if (_.isEmpty(args)) return;

    const validate = UserStrict.validate(args);

    if (validate.fails())
      return console.error("User Strict has errors => ", args, validate.errors);

    this.data = args;
  }

  static validate(args) {
    return new Validator(args, RULES);
  }

  get id() {
    return this.data.id ?? "";
  }

  get login() {
    return this.data.login ?? "";
  }

  get nodeId() {
    return this.data.node_id ?? "";
  }
}
