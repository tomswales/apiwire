import { Meteor } from 'meteor/meteor';
import Providers from '../../api/providers/providers';
import APIs from '../../api/apis/apis';

Meteor.startup(() => {

    /*INDUSTRIES:
     Aerospace,
     Agriculture,
     Automotive,
     Business Services,
     Chemicals,
     Construction,
     Consumer Products,
     Defence and Security,
     Education,
     Energy,
     Entertainment,
     Financial Services,
     Food,
     Gaming,
     Healthcare,
     Hospitality,
     Information Technology,
     Manufacturing,
     Media,
     Mining,
     Pharmaceutical,
     Professional Services,
     Public Services,
     Real Estate,
     Recruitment,
     Retail,
     Telecommunications,
     Transport,
     Utilities*/

    if (Providers.find().count()== 0) {
        let one = Providers.insert({created: new Date(), name: "Microsoft", hq: "United States", status: "Public", homepage: "https://www.microsoft.com"}, (result) =>{
            APIs.insert({
                created: new Date(), providerId: one, name: "Computer Vision API", types: ["identify_image_objects", "identify_video_objects", "text-recognition",  "recognise_face"], industries: ["all"], providerName: "Microsoft", availability: "Public"});

        });
        let two = Providers.insert({created: new Date(), name: "Google", hq: "United States", status: "Public", homepage: "https://www.google.com"}, (result) =>{
            APIs.insert({created: new Date(), providerId: two, name: "Cloud Vision API", types: ["identify_image_objects", "identify_video_objects", "text-recognition",  "recognise_face"], industries: ["all"], providerName: "Google", availability: "Public"});
        });
        let three = Providers.insert({created: new Date(), name: "IBM", hq: "United States", status: "Public", homepage: "https://www.ibm.com"}, (result) =>{
            APIs.insert({created: new Date(), providerId: three, name: "Watson Visual Recognition", types: ["identify_image_objects", "recognise_face"], industries: ["all"], providerName: "IBM", availability: "Public"});
        });
        let four = Providers.insert({created: new Date(), name: "Arria NLG", hq: "United Kingdom", status: "Public", homepage: "https://www.arria.com/"}, (result) =>{
            APIs.insert({created: new Date(), providerId: four, name: "Articulator Pro", types: ["generate_natural_language"], industries: ["all"], providerName: "Arria NLG", availability: "Private beta"});
        });
        let five = Providers.insert({created: new Date(), name: "CloudSight", hq: "United States", status: "Private", homepage: "https://cloudsight.ai"}, (result) =>{
            APIs.insert({created: new Date(), providerId: five, name: "Image Recognition API", types: ["identify_image_objects"], industries: ["all"], providerName: "CloudSight", availability: "Public"});
        });
        let six = Providers.insert({created: new Date(), name: "Clarifai", hq: "United States", status: "Private", homepage: "https://www.clarifai.com/"}, (result) =>{
            APIs.insert({created: new Date(), providerId: six, name: "Image & Video Recognition API", types: ["identify_image_objects"], industries: ["all"], providerName: "Clarifai", availability: "Public"});
        });
        let seven = Providers.insert({created: new Date(), name: "Blippar", hq: "United Kingdom", status: "Private", homepage: "https://blippar.com/"}, (result) =>{
            APIs.insert({created: new Date(), providerId: seven, name: "Computer Vision API", types: ["identify_image_objects", "identify_video_objects"], industries: ["all"], providerName: "Blippar", availability: "Public"});
        });
        let eight = Providers.insert({created: new Date(), name: "Imagga", hq: "Bulgaria", status: "Private", homepage: "https://imagga.com/"}, (result) =>{
            APIs.insert({created: new Date(), providerId: eight, name: "Imagga API", types: ["identify_image_objects"], industries: ["all"], providerName: "Imagga", availability: "Public"});
        });
    }
});