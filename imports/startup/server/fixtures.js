import { Meteor } from 'meteor/meteor';
import Providers from '../../api/providers/providers';
import APIs from '../../api/apis/apis';

Meteor.startup(() => {
    if (Features.find().count() == 0) {
        Features.insert({value: "sentiment_analysis", text: "Analyse sentiment"});
        Features.insert({value: "translate_between_languages", text: "Translate between Languages"});
        Features.insert({value: "classify_documents", text: "Classify documents"});
        Features.insert({value: "navigation", text:  "Plan journeys or routes"});
        Features.insert({value: "text_recognition", text:  "Recognise and read text"});
        Features.insert({value: "analyse_graph", text:  "Analyse graph data"});
        Features.insert({value: "machine_learning", text:  "Machine learning"});
        Features.insert({value: "linguistic_analysis", text:  "Analyse linguistic features"});
        Features.insert({value: "get_entities_from_text", text:  "Identify entities in text"});
        Features.insert({value: "generate_natural_language", text:  "Generate natural language"});
        Features.insert({value: "identify_video_objects", text:  "Identify objects in videos"});
        Features.insert({value: "identify_image_objects", text:  "Identify objects in images"});
        Features.insert({value: "speaker_recognition", text:  "Recognise speakers"});
        Features.insert({value: "natural_conversation", text:  "Have a conversation"});
        Features.insert({value: "identify_threats", text:  "Identify threats"});
        Features.insert({value: "speech_to_text", text:  "Convert speech to text"});
        Features.insert({value: "recognise_face", text:  "Recognise faces"});
        Features.insert({value: "provide_recommendations", text:  "Provide recommendations"});
        Features.insert({value: "text_to_speech", text:  "Convert text to speech"});
        Features.insert({value: "convert_file", text:  "Convert files to different formats"});
        Features.insert({value: "find_relevant_documents", text:  "Find relevant documents"});
        Features.insert({value: "identify_intent", text:  "Understand user intent"});
    }

    if (Categories.find().count() == 0) {
        Categories.insert({value: "Conversation", text: "Conversation"});
        Categories.insert({value: "Document_Classification", text: "Document Classification"});
        Categories.insert({value: "File_Conversion", text: "File Conversion"});
        Categories.insert({value: "Graph_Analysis", text: "Graph Analysis"});
        Categories.insert({value: "Machine_Learning", text: "Machine Learning"});
        Categories.insert({value: "Natural_Language_Generation", text: "Natural Language Generation"});
        Categories.insert({value: "Natural_Language_Processing", text: "Natural Language Processing"});
        Categories.insert({value: "Navigation", text: "Navigation"});
        Categories.insert({value: "Recommendations", text: "Recommendations"});
        Categories.insert({value: "Sentiment_Analysis", text: "Sentiment Analysis"});
        Categories.insert({value: "Speech_Recognition", text: "Speech Recognition"});
        Categories.insert({value: "Text_to_Speech", text: "Text-to-Speech"});
        Categories.insert({value: "Translation", text: "Translation"});
        Categories.insert({value: "Threat_Identification", text: "Threat Identification"});
        Categories.insert({value: "Visual_Recognition", text: "Visual Recognition"});
    }


    if (Providers.find().count()== 0) {
        let one = Providers.insert({created: new Date(), name: "Microsoft", hq: "United States", status: "Public", icon_url: "logos/microsoft.png", homepage: "https://www.microsoft.com"}, (result) =>{
            let company_logo_one = Providers.findOne({_id: one}).icon_url;
            APIs.insert({created: new Date(), providerId: one, name: "Computer Vision API", category: "Visual_Recognition", features: ["identify_image_objects"], industries: ["all"], providerName: "Microsoft", availability: "Public", icon_url: company_logo_one, api_homepage: "https://www.microsoft.com/cognitive-services/en-us/computer-vision-api"});
            APIs.insert({created: new Date(), providerId: one, name: "Face API", category: "Visual_Recognition", features: ["recognise_face"], industries: ["all"], providerName: "Microsoft", availability: "Public", icon_url: company_logo_one, api_homepage: "https://www.microsoft.com/cognitive-services/en-us/face-api"});
            APIs.insert({created: new Date(), providerId: one, name: "Video API", category: "Visual_Recognition", features: ["identify_video_objects"], industries: ["all"], providerName: "Microsoft", availability: "Public", icon_url: company_logo_one, api_homepage: "https://www.microsoft.com/cognitive-services/en-us/video-api"});
            APIs.insert({created: new Date(), providerId: one, name: "Speech API", category: "Speech_Recognition", features: ["speech_to_text"], industries: ["all"], providerName: "Microsoft", availability: "Public", icon_url: company_logo_one, api_homepage: "https://www.microsoft.com/cognitive-services/en-us/speech-api"});
            APIs.insert({created: new Date(), providerId: one, name: "Custom Speech Service", category: "Speech_Recognition", features: ["speech_to_text"], industries: ["all"], providerName: "Microsoft", availability: "Public", icon_url: company_logo_one, api_homepage: "https://www.microsoft.com/cognitive-services/en-us/custom-recognition-intelligent-service-cris"});
            APIs.insert({created: new Date(), providerId: one, name: "Speaker Recognition API", category: "Speech_Recognition", features: ["speaker_recognition"], industries: ["all"], providerName: "Microsoft", availability: "Public", icon_url: company_logo_one, api_homepage: "https://www.microsoft.com/cognitive-services/en-us/speaker-recognition-api"});
            APIs.insert({created: new Date(), providerId: one, name: "Language Understanding Intelligent Service", category: "Natural_Language_Processing", features: ["linguistic_analysis"], industries: ["all"], providerName: "Microsoft", availability: "Public", icon_url: company_logo_one, api_homepage: "https://www.microsoft.com/cognitive-services/en-us/language-understanding-intelligent-service-luis"});
            APIs.insert({created: new Date(), providerId: one, name: "Linguistic Analysis API", category: "Natural_Language_Processing", features: ["linguistic_analysis"], industries: ["all"], providerName: "Microsoft", availability: "Public", icon_url: company_logo_one, api_homepage: "https://www.microsoft.com/cognitive-services/en-us/linguistic-analysis-api"});
            APIs.insert({created: new Date(), providerId: one, name: "Text Analytics API", category: "Natural_Language_Processing", features: ["get_entities_from_text"], industries: ["all"], providerName: "Microsoft", availability: "Public", icon_url: company_logo_one, api_homepage: "https://www.microsoft.com/cognitive-services/en-us/text-analytics-api"});
            APIs.insert({created: new Date(), providerId: one, name: "Translator API", category: "Translation", features: ["translate_between_languages"], industries: ["all"], providerName: "Microsoft", availability: "Public", icon_url: company_logo_one, api_homepage: "https://www.microsoft.com/cognitive-services/en-us/translator-api"});
            APIs.insert({created: new Date(), providerId: one, name: "Recommendations API", category: "Recommendations", features: ["provide_recommendations"], industries: ["all"], providerName: "Microsoft", availability: "Public", icon_url: company_logo_one, api_homepage: "https://www.microsoft.com/cognitive-services/en-us/recommendations-api"});

        });
        let two = Providers.insert({created: new Date(), name: "Google", hq: "United States", status: "Public",  icon_url: "logos/google.png", homepage: "https://www.google.com"}, (result) =>{
            let company_logo_two = Providers.findOne({_id: two}).icon_url;
            APIs.insert({created: new Date(), providerId: two, name: "Cloud Vision API", category: "Visual_Recognition", features: ["identify_image_objects", "identify_video_objects", "text_recognition",  "recognise_face"], industries: ["all"], providerName: "Google", availability: "Public", icon_url: company_logo_two, api_homepage: "https://cloud.google.com/vision"});
            APIs.insert({created: new Date(), providerId: two, name: "Cloud Natural Language API", category: "Natural_Language_Processing", features: ["linguistic_analysis"], industries: ["all"], providerName: "Google", availability: "Public", icon_url: company_logo_two, api_homepage: "https://cloud.google.com/natural-language"});
            APIs.insert({created: new Date(), providerId: two, name: "Cloud Speech API", category: "Speech_Recognition", features: ["speech_to_text"], industries: ["all"], providerName: "Google", availability: "Public", icon_url: company_logo_two, api_homepage: "https://cloud.google.com/speech"});
            APIs.insert({created: new Date(), providerId: two, name: "Cloud Translation API", category: "Translation", features: ["translate_between_languages"], industries: ["all"], providerName: "Google", availability: "Public", icon_url: company_logo_two, api_homepage: "https://cloud.google.com/translate"});
            APIs.insert({created: new Date(), providerId: two, name: "Cloud Machine Learning Platform", category: "Machine_Learning", features: ["machine_learning"], industries: ["all"], providerName: "Google", availability: "Public", icon_url: company_logo_two, api_homepage: "https://cloud.google.com/ml"});
            APIs.insert({created: new Date(), providerId: two, name: "Directions API", category: "Navigation", features: ["navigation"], industries: ["all"], providerName: "Google", availability: "Public", icon_url: company_logo_two, api_homepage: "https://developers.google.com/maps/documentation/directions/"});
        });
        let three = Providers.insert({created: new Date(), name: "IBM", hq: "United States", status: "Public", icon_url: "logos/ibm.png", homepage: "https://www.ibm.com"}, (result) =>{
            let company_logo_three = Providers.findOne({_id: three}).icon_url;
            APIs.insert({created: new Date(), providerId: three, name: "Watson Visual Recognition API", category: "Visual_Recognition", features: ["identify_image_objects", "recognise_face"], industries: ["all"], providerName: "IBM", availability: "Public", icon_url: company_logo_three, api_homepage: "https://www.ibm.com/watson/developercloud/visual-recognition.html"});
            APIs.insert({created: new Date(), providerId: three, name: "Watson Conversation API", category: "Conversation", features: ["natural_conversation"], industries: ["all"], providerName: "IBM", availability: "Public", icon_url: company_logo_three, api_homepage: "https://www.ibm.com/watson/developercloud/conversation.html"});
            APIs.insert({created: new Date(), providerId: three, name: "Watson Document Conversion API", category: "File_Conversion", features: ["convert_file"], industries: ["all"], providerName: "IBM", availability: "Public", icon_url: company_logo_three, api_homepage: "https://www.ibm.com/watson/developercloud/doc/document-conversion"});
            APIs.insert({created: new Date(), providerId: three, name: "Watson Language Translator API", category: "Translation", features: ["translate_between_languages"], industries: ["all"], providerName: "IBM", availability: "Public", icon_url: company_logo_three, api_homepage: "https://www.ibm.com/watson/developercloud//language-translator.html"});
            APIs.insert({created: new Date(), providerId: three, name: "Watson Natural Language Classifier API", category: "Natural_Language_Processing", features: ["linguistic_analysis", "classify_documents"], industries: ["all"], providerName: "IBM", availability: "Public", icon_url: company_logo_three, api_homepage: "https://www.ibm.com/watson/developercloud/nl-classifier.html"});
            APIs.insert({created: new Date(), providerId: three, name: "Watson Tone Analyzer API", category: "Sentiment_Analysis", features: ["sentiment_analysis"], industries: ["all"], providerName: "IBM", availability: "Public", icon_url: company_logo_three, api_homepage: "https://www.ibm.com/watson/developercloud//tone-analyzer.html"});
            APIs.insert({created: new Date(), providerId: three, name: "Watson Speech-to-Text API", category: "Speech_Recognition", features: ["speech_to_text"], industries: ["all"], providerName: "IBM", availability: "Public", icon_url: company_logo_three, api_homepage: "https://www.ibm.com/watson/developercloud/speech-to-text.html"});
            APIs.insert({created: new Date(), providerId: three, name: "Watson Text-to-Speech API", category: "Text_to_Speech", features: ["text_to_speech"], industries: ["all"], providerName: "IBM", availability: "Public", icon_url: company_logo_three, api_homepage: "https://www.ibm.com/watson/developercloud/text-to-speech.html"});
        });
        let four = Providers.insert({created: new Date(), name: "Arria NLG", hq: "United Kingdom", status: "Public",icon_url: "logos/arria.jpg", homepage: "https://www.arria.com/"}, (result) =>{
            let company_logo_four = Providers.findOne({_id: four}).icon_url;
            APIs.insert({created: new Date(), providerId: four, name: "Articulator Pro", category: "Natural_Language_Generation", features: ["generate_natural_language"], industries: ["all"], providerName: "Arria NLG", availability: "Private beta", icon_url: company_logo_four, api_homepage: "https://www.arria.com/nlg-cloud/"});
        });
        let five = Providers.insert({created: new Date(), name: "CloudSight", hq: "United States", status: "Private", icon_url: "logos/cloudsight.png", homepage: "https://cloudsight.ai"}, (result) =>{
            let company_logo_five = Providers.findOne({_id: five}).icon_url;
            APIs.insert({created: new Date(), providerId: five, name: "Image Recognition API", category: "Visual_Recognition", features: ["identify_image_objects"], industries: ["all"], providerName: "CloudSight", availability: "Public", icon_url: company_logo_five, api_homepage: "https://cloudsight.ai/"});
        });
        let six = Providers.insert({created: new Date(), name: "Clarifai", hq: "United States", status: "Private", icon_url: "logos/clarifai.png", homepage: "https://www.clarifai.com/"}, (result) =>{
            let company_logo_six = Providers.findOne({_id: six}).icon_url;
            APIs.insert({created: new Date(), providerId: six, name: "Image & Video Recognition API", category: "Visual_Recognition", features: ["identify_image_objects"], industries: ["all"], providerName: "Clarifai", availability: "Public", icon_url: company_logo_six, api_homepage: "https://www.clarifai.com/api"});
        });
        let seven = Providers.insert({created: new Date(), name: "Blippar", hq: "United Kingdom", status: "Private", icon_url: "logos/blippar.png", homepage: "https://blippar.com/"}, (result) =>{
            let company_logo_seven = Providers.findOne({_id: seven}).icon_url;
            APIs.insert({created: new Date(), providerId: seven, name: "Computer Vision API", category: "Visual_Recognition", features: ["identify_image_objects", "identify_video_objects"], industries: ["all"], providerName: "Blippar", availability: "Public", icon_url: company_logo_seven, api_homepage: "https://blippar.com/en/products/computer-vision-api/"});
        });
        let eight = Providers.insert({created: new Date(), name: "Imagga", hq: "Bulgaria", status: "Private", icon_url: "logos/imagga.jpg", homepage: "https://imagga.com/"}, (result) =>{
            let company_logo_eight = Providers.findOne({_id: eight}).icon_url;
            APIs.insert({created: new Date(), providerId: eight, name: "Auto-tagging API", category: "Visual_Recognition", features: ["identify_image_objects"], industries: ["all"], providerName: "Imagga", availability: "Public", icon_url: company_logo_eight, api_homepage: "https://imagga.com/solutions/auto-tagging.html"});
        });
        let nine = Providers.insert({created: new Date(), name: "Amazon Web Services", hq: "United States", status: "Public", icon_url: "logos/aws.png", homepage: "https://aws.amazon.com/"}, (result) =>{
            let company_logo_nine = Providers.findOne({_id: nine}).icon_url;
            APIs.insert({created: new Date(), providerId: nine, name: "Amazon Lex", category: "Conversation", features: ["natural_conversation"], industries: ["all"], providerName: "Amazon Web Services", availability: "Public", icon_url: company_logo_nine, api_homepage: "https://aws.amazon.com/lex"});
            APIs.insert({created: new Date(), providerId: nine, name: "Amazon Polly", category: "Text_to_Speech", features: ["text_to_speech"], industries: ["all"], providerName: "Amazon Web Services", availability: "Public", icon_url: company_logo_nine, api_homepage: "https://aws.amazon.com/polly"});
            APIs.insert({created: new Date(), providerId: nine, name: "Amazon Rekognition", category: "Visual_Recognition", features: ["identify_image_objects"], industries: ["all"], providerName: "Amazon Web Services", availability: "Public", icon_url: company_logo_nine, api_homepage: "https://aws.amazon.com/rekognition"});
            APIs.insert({created: new Date(), providerId: nine, name: "Amazon Machine Learning", category: "Machine_Learning", features: ["identify_image_objects"], industries: ["all"], providerName: "Amazon Web Services", availability: "Public", icon_url: company_logo_nine, api_homepage: "https://aws.amazon.com/lex"});
        });
        let ten = Providers.insert({created: new Date(), name: "API.AI", hq: "United States", status: "Private", icon_url: "logos/apiai.jpg", homepage: "https://api.ai"}, (result) =>{
            let company_logo_ten = Providers.findOne({_id: ten}).icon_url;
            APIs.insert({created: new Date(), providerId: ten, name: "API.AI", category: "Conversation", features: ["natural_conversation"], industries: ["all"], providerName: "API.AI", availability: "Public", icon_url: company_logo_ten, api_homepage: "https://api.ai"});
        });
        let eleven = Providers.insert({created: new Date(), name: "Catchoom", hq: "Spain", status: "Private", icon_url: "logos/catchoom.png", homepage: "https://catchoom.com"}, (result) =>{
            let company_logo_eleven = Providers.findOne({_id: eleven}).icon_url;
            APIs.insert({created: new Date(), providerId: eleven, name: "Cloud Image Recognition API", category: "Visual_Recognition", features: ["identify_image_objects", "identify_video_objects"], industries: ["all"], providerName: "Catchoom", availability: "Public", icon_url: company_logo_eleven, api_homepage: "https://catchoom.com/product/craftar/cloud-image-recognition-api/"});
        });
        let twelve = Providers.insert({created: new Date(), name: "HPE Haven On Demand", hq: "United States", status: "Public", icon_url: "logos/hpehaven.jpg", homepage: "https://www.hpe.com/"}, (result) =>{
            let company_logo_twelve = Providers.findOne({_id: twelve}).icon_url;
            APIs.insert({created: new Date(), providerId: twelve, name: "Recognize Speech API", category: "Speech_Recognition", features: ["speech_to_text"], industries: ["all"], providerName: "HPE Haven On Demand", availability: "Public", icon_url: company_logo_twelve, api_homepage: "https://dev.havenondemand.com/apis/recognizespeech"});
            APIs.insert({created: new Date(), providerId: twelve, name: "OCR Document API", category: "Visual_Recognition", features: ["text_recognition"], industries: ["all"], providerName: "HPE Haven On Demand", availability: "Public", icon_url: company_logo_twelve, api_homepage: "https://dev.havenondemand.com/apis/ocrdocument"});
            APIs.insert({created: new Date(), providerId: twelve, name: "Detect Faces API", category: "Visual_Recognition", features: ["recognise_face"], industries: ["all"], providerName: "HPE Haven On Demand", availability: "Public", icon_url: company_logo_twelve, api_homepage: "https://dev.havenondemand.com/apis/detectfaces"});
            APIs.insert({created: new Date(), providerId: twelve, name: "Recognize Images API", category: "Visual_Recognition", features: ["identify_image_objects"], industries: ["all"], providerName: "HPE Haven On Demand", availability: "Public", icon_url: company_logo_twelve, api_homepage: "https://dev.havenondemand.com/apis/recognizeimages"});
            APIs.insert({created: new Date(), providerId: twelve, name: "Retrieve Classification Objects API", category: "Document_Classification", features: ["classify_documents"], industries: ["all"], providerName: "HPE Haven On Demand", availability: "Public", icon_url: company_logo_twelve, api_homepage: "https://dev.havenondemand.com/apis/retrieveclassificationobjects"});
            APIs.insert({created: new Date(), providerId: twelve, name: "Recommend API", category: "Recommendations", features: ["provide_recommendations"], industries: ["all"], providerName: "HPE Haven On Demand", availability: "Public", icon_url: company_logo_twelve, api_homepage: "https://dev.havenondemand.com/apis/recommend"});
            APIs.insert({created: new Date(), providerId: twelve, name: "Find Similar API", category: "Document_Classification", features: ["find_relevant_documents"], industries: ["all"], providerName: "HPE Haven On Demand", availability: "Public", icon_url: company_logo_twelve, api_homepage: "https://dev.havenondemand.com/apis/findsimilar"});
            APIs.insert({created: new Date(), providerId: twelve, name: "Extract Entities API", category: "Natural_Language_Processing", features: ["get_entities_from_text"], industries: ["all"], providerName: "HPE Haven On Demand", availability: "Public", icon_url: company_logo_twelve, api_homepage: "https://dev.havenondemand.com/apis/extractentities"});
            APIs.insert({created: new Date(), providerId: twelve, name: "Analyze Sentiment API", category: "Sentiment_Analysis", features: ["sentiment_analysis"], industries: ["all"], providerName: "HPE Haven On Demand", availability: "Public", icon_url: company_logo_twelve, api_homepage: "https://dev.havenondemand.com/apis/analyzesentiment"});
        });
        let thirteen = Providers.insert({created: new Date(), name: "Jastech", hq: "Japan", status: "Private", icon_url: "logos/jastech.png", homepage: "https://jastech.com"}, (result) =>{
            let company_logo_thirteen = Providers.findOne({_id: thirteen}).icon_url;
            APIs.insert({created: new Date(), providerId: thirteen, name: "LTU Cloud Image Recognition API", category: "Visual_Recognition", features: ["identify_image_objects"], industries: ["all"], providerName: "Jastech", availability: "Public", icon_url: company_logo_thirteen, api_homepage: "https://cloud.ltutech.com/"});
        });
        let fourteen = Providers.insert({created: new Date(), name: "Wit.ai", hq: "United States", status: "Private", icon_url: "logos/witai.png", homepage: "https://wit.ai"}, (result) =>{
            let company_logo_fourteen = Providers.findOne({_id: fourteen}).icon_url;
            APIs.insert({created: new Date(), providerId: fourteen, name: "Wit", category: "Conversation", features: ["natural_conversation"], industries: ["all"], providerName: "Wit.ai", availability: "Public", icon_url: company_logo_fourteen, api_homepage: "https://wit.ai/"});
        });
        let fifteen = Providers.insert({created: new Date(), name: "TextRazor", hq: "United States", status: "Private", icon_url: "logos/textrazor.png", homepage: "https://www.textrazor.com"}, (result) =>{
            let company_logo_fifteen = Providers.findOne({_id: fifteen}).icon_url;
            APIs.insert({created: new Date(), providerId: fifteen, name: "TextRazor API", category: "Natural_Language_Processing", features: ["get_entities_from_text", "classify_documents", "linguistic_analysis"], industries: ["all"], providerName: "TextRazor", availability: "Public", icon_url: company_logo_fifteen, api_homepage: "https://www.textrazor.com/technology"});
        });
        let sixteen = Providers.insert({created: new Date(), name: "Ambiverse", hq: "Germany", status: "Private", icon_url: "logos/ambiverse.png", homepage: "https://www.ambiverse.com"}, (result) =>{
            let company_logo_sixteen = Providers.findOne({_id: sixteen}).icon_url;
            APIs.insert({created: new Date(), providerId: sixteen, name: "Natural Language Understanding API", category: "Natural_Language_Processing", features: ["get_entities_from_text"], industries: ["all"], providerName: "Ambiverse", availability: "Public", icon_url: company_logo_sixteen, api_homepage: "https://www.ambiverse.com/natural-language-understanding-api/"});
        });
        let seventeen = Providers.insert({created: new Date(), name: "Here", hq: "Germany", status: "Private", icon_url: "logos/here.png", homepage: "https://www.here.com"}, (result) =>{
            let company_logo_seventeen = Providers.findOne({_id: seventeen}).icon_url;
            APIs.insert({created: new Date(), providerId: seventeen, name: "Routing API", category: "Navigation", features: ["navigation"], industries: ["all"], providerName: "Here", availability: "Public", icon_url: company_logo_seventeen, api_homepage: "https://developer.here.com/rest-apis/documentation/routing/topics/quick-start.html"});
        });
        let eighteen = Providers.insert({created: new Date(), name: "Automated Insights", hq: "United States", status: "Private", icon_url: "logos/ai.png", homepage: "https://automatedinsights.com"}, (result) =>{
            let company_logo_eighteen = Providers.findOne({_id: eighteen}).icon_url;
            APIs.insert({created: new Date(), providerId: eighteen, name: "Wordsmith", category: "Natural_Language_Generation", features: ["generate_natural_language"], industries: ["all"], providerName: "Automated Insights", availability: "Public", icon_url: company_logo_eighteen, api_homepage: "https://automatedinsights.com/wordsmith"});
        });
        let nineteen = Providers.insert({created: new Date(), name: "TheySay", hq: "United Kingdom", status: "Private", icon_url: "logos/theysay.png", homepage: "https://theysay.io"}, (result) =>{
            let company_logo_nineteen = Providers.findOne({_id: nineteen}).icon_url;
            APIs.insert({created: new Date(), providerId: nineteen, name: "MoodRaker", category: "Sentiment_Analysis", features: ["sentiment_analysis"], industries: ["all"], providerName: "TheySay", availability: "Public", icon_url: company_logo_nineteen, api_homepage: "http://www.theysay.io/product/moodraker/"});
        });
        let twenty = Providers.insert({created: new Date(), name: "Aylien", hq: "Ireland", status: "Private", icon_url: "logos/aylien.png", homepage: "http://aylien.com"}, (result) =>{
            let company_logo_twenty = Providers.findOne({_id: twenty}).icon_url;
            APIs.insert({created: new Date(), providerId: twenty, name: "Text Analysis API", category: "Natural_Language_Processing", features: ["sentiment_analysis", "get_entities_from_text", "classify_documents"], industries: ["all"], providerName: "Aylien", availability: "Public", icon_url: company_logo_twenty, api_homepage: "http://aylien.com/text-api"});
        });
    }
});