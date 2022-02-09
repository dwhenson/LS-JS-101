// If we have a 40-character wide table of Flintstone family members, how can we
// center the following title above the table with spaces?

let title = "Flintstone Family Members";

const spacing = (40 - title.length) / 2;

title.padStart(spacing + title.length, " "); //?
