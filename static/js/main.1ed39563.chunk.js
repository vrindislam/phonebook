(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){},18:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),s=a(8),o=a.n(s),r=(a(14),a(9)),l=a(4),i=(a(15),a(3)),j=a(7),b=(a(16),a(0)),d=function(t){var e=t.addContact,a={firstName:"",lastName:"",phoneNumber:""},n=Object(c.useState)(a),s=Object(l.a)(n,2),o=s[0],r=s[1],d=function(t){var e;t.preventDefault();var a=t.target,c=a.name,n=a.value;r(Object(j.a)(Object(j.a)({},o),{},(e={},Object(i.a)(e,c,n),Object(i.a)(e,"id",1e3*Math.random()),e)))};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Add a new contact"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(o),r(a)},className:"form",children:[Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",placeholder:"First name",className:"form-input",name:"firstName",value:o.firstName,onChange:d,autoComplete:"off"})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",placeholder:"Last name",className:"form-input",name:"lastName",value:o.lastName,onChange:d,autoComplete:"off"})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"number",placeholder:"Phone number",className:"form-input",name:"phoneNumber",value:o.phoneNumber,onChange:d,autoComplete:"off",required:!0})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{className:"form-submit",type:"submit",value:"Submit"})})]})]})},m=(a(18),function(t){var e=t.contact,a=t.contacts,c=t.setContacts;return Object(b.jsxs)("tr",{className:"contacts-table-row",children:[Object(b.jsx)("td",{className:"contacts-table-row-data",children:e.firstName}),Object(b.jsx)("td",{className:"contacts-table-row-data",children:e.lastName}),Object(b.jsx)("td",{className:"contacts-table-row-data",children:e.phoneNumber}),Object(b.jsxs)("td",{className:"contacts-table-row-data actions",children:[Object(b.jsx)("a",{className:"contacts-table-btn",href:"tel:+".concat(e.phoneNumber),children:Object(b.jsx)("i",{className:"fas fa-phone"})}),Object(b.jsx)("button",{className:"contacts-table-btn",onClick:function(){c(a.filter((function(t){return t.id!==e.id})))},children:Object(b.jsx)("i",{className:"fas fa-trash-alt"})})]})]})}),u=function(t){var e=t.sortedContacts,a=t.setContacts,c=t.contacts;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("table",{className:"contacts-table",children:[Object(b.jsx)("caption",{className:"contacts-table-caption",children:"PhoneBook"}),Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"contacts-table-heading",children:[Object(b.jsx)("th",{className:"contacts-table-heading-column",children:"First Name"}),Object(b.jsx)("th",{className:"contacts-table-heading-column",children:"Last Name"}),Object(b.jsx)("th",{className:"contacts-table-heading-column",children:"Phone"}),Object(b.jsx)("th",{className:"contacts-table-heading-column",children:"Actions"})]})}),Object(b.jsx)("tbody",{children:e.map((function(t){return Object(b.jsx)(m,{contacts:c,setContacts:a,contact:t},t.id)}))})]}),!e.length&&Object(b.jsx)("p",{children:"Let's add someone, buddy"})]})};var h=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),a=e[0],n=e[1],s=Object(c.useState)(!1),o=Object(l.a)(s,2),i=o[0],j=o[1];return Object(b.jsxs)("div",{className:"app-container",children:[Object(b.jsxs)("div",{className:"app-navigation",children:[Object(b.jsx)("input",{className:"form-input search",placeholder:"Search"}),Object(b.jsx)("button",{className:"form-submit",onClick:function(){j(!i)},children:i?"Close":"Add Contact"})]}),i&&Object(b.jsx)(d,{addContact:function(t){n([].concat(Object(r.a)(a),[t]))}}),Object(b.jsx)(u,{contacts:a,setContacts:n,sortedContacts:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"lastName";return t.sort((function(t,a){var c=t[e].toLowerCase(),n=a[e].toLowerCase();return c<n?-1:c>n?1:0}))}(a)})]})},O=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,o=e.getTTFB;a(t),c(t),n(t),s(t),o(t)}))};o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.1ed39563.chunk.js.map