//helloworld.js:

Module.register('MMM-IBM-Watson', {
  // Default module config.
  defaults: {
    text: 'Hello World!'
  },

  // Override dom generator.
  getDom: function() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.config.text;

    // display translated text
    const displayText = document.createElement('div');
    displayText.className = 'display-text';

    // button
    const button = document.createElement('button');
    var buttonText = document.createTextNode('CLICK ME');
    button.appendChild(buttonText);

    wrapper.appendChild(displayText);
    wrapper.appendChild(button);

    wrapper.className = 'watson-area';
    return wrapper;
  }
});
