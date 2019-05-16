import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import '../sass/style.scss';
// eslint-disable-next-line id-length
import $ from 'jquery';
// eslint-disable-next-line id-length
import _ from 'lodash';

// Load handlebars template
const template = require('../templates/userTable.handlebars');

$(document).ready(() => {
    // Lodash example usage
    // eslint-disable-next-line no-unused-vars,array-element-newline
    const lodashExample = _.join(['Hello', 'World'], ' ');


    // Jquery
    $('#save').click(() => {
        // Bootstrap js
        $('#exampleModal').modal('hide');
    });

    // Example get service call
    $.get('/user').then((response) => {
        $('#user-table-wrapper').html(template({ 'users': JSON.parse(response) }));
    });
});
