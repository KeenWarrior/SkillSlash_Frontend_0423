function toJSON(schema, options) {
  schema.options.toJSON = {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      delete ret.password;
      return ret;
    },
  };
}

module.exports = toJSON;
