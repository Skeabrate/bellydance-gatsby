const React = require('react');
const { MainTemplate } = require('./src/templates/MainTemplate');

exports.wrapPageElement = ({ element, props }) => {
    return <MainTemplate {...props}>{element}</MainTemplate>;
};
