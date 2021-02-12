var template = {
    name: '',
    setName: function (newValue) {
        this.name = newValue;
    },
    getName: function () {
        return this.name;
    }
};

var testObject = result();
testObject.extend(template);
expect(testObject.hasOwnProperty('name')).to.equal(true, "Template properties were not cloned correctly.");
testObject.setName('new name');
expect(testObject.getName()).to.equal('new name', "Extension method didn't work with local context.");