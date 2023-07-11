$("#myform").validate({
  rules: {
    name: {
      minlength: 10,
      maxlength: 12
    },
    email: {
      minlength: 10,
      maxlength: 12,
    },
    Phone: {
      minlength: 10,
      maxlength: 12,
    },
    Title: {
      minlength: 10,
      maxlength: 12,
    },
  },
  messages: {
    name: {
      required: "Please enter your name",
      minlength: "Name at least 10 characters",
      maxlength: "Name at least 12 characters",
    },
    email: {
      required: "Please enter your email",
      minlength: "Name at least 10 characters",
      maxlength: "Name at least 12 characters",
    },
    Phone: {
      required: "Please enter your Phone",
      minlength: "Name at least 10 characters",
      maxlength: "Name at least 12 characters",
    },
    Title: {
      required: "Please enter your Title",
      minlength: "Name at least 10 characters",
      maxlength: "Name at least 12 characters",
    },
  },
  submitHandler: function (form) {
    form.submit();
  },
});
