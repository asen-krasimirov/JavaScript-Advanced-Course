function editElement(refrence, matcher, replacer) {
    // let regex = new RegExp(matcher, 'g');
    // let content = refrence.textContent.replace(regex, replacer);
    // refrence.textContent = content;
    
    refrence.textContent = refrence.textContent.replace(matcher, replacer);
}