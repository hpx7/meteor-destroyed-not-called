if (Meteor.isClient) {

  Template.hello.events({
    'click button': function () {
      Template.foo.destroyed = function () {
        console.log('foo template destroyed');
      };
      Session.set('hideFoo', true);
    }
  });

  Template.hello.helpers({
    hideFoo: function () {
      return Session.get('hideFoo');
    }
  });

  // If you uncomment the line below, the message is logged
  // Template.foo.destroyed = function () {};
}
