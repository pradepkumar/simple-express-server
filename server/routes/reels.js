var reels = [
    {id:"tt2631186" , title:"Baahubali - The Beginning", cast:"Prabhas, Rana, Anushka and Tammanah", director:"SS Rajamouli", music:"MM Keeravani", dop:"KK Senthil", coview:"Vignesh, Ashwin and Saturday", timestamp:"08/07/2015 9 PM", location:"ShowCase Cinemas, Lowell", description: "A dispute between brothers spans across two generations.This is part 1 of a 2 part period drama. Part 1 shows the brothers Baahubali and Bhallaladeva fight for the throne to Mahishmathi Kingdom."},
    {id:"tt4429128" , title:"Papanasam", cast:"Kamalhasan, Gowthami", director:"Jeethu Joseph", music:"Ghibran", dop:"NA", coview:"Vignesh, Ashwin and Saturday", timestamp:"04/04/2015 8PM", location:"Apple Cinemas, Boston", description: "Desperate measures are taken by a man who tries to save his family from the dark side of the law, after they commit an unexpected crime."},
    {id:"tt0110912" , title:"Pulp Fiction", cast:"John Travolta, Uma Thurman, Samuel Jackson", music:"Unknown", director:"Quinton Torentino", dop:"Alex", coview:"Vignesh, Ashwin and Saturday", timestamp:"05/06/2014", location:"621 Parker St", description: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."},
    {id:"tt0479751" , title:"Sivaji - The Boss", cast:"Rajni, Shreya and Vivek", director:"S Shankar", music:"AR Rahman", dop:"KV Anand", coview:"Vignesh, Ashwin and Saturday", timestamp:"04/08/2012 11AM", location:"AGS Cinemas, Navalur", description: "Corrupt police and politicians target a computer engineer for trying to better the lives of less privileged citizens.."}
];

exports.findAll = function (req, res, next) {
    res.send(reels);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(reels[id]);
};