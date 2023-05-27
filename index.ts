import fetch from 'node-fetch'
import getSecret from './libs/getSecret'
exports.handler = async (event, context, callback) => {
  const discordToken = await getSecret('production')
  const url = `https://discord.com/api/v10/channels/803429347750576141/messages`
  const response = await fetch(url, {
	method: 'post',
	body: JSON.stringify(body),
	headers: {
          'Content-Type': 'application/json',
          'Authorization': discordToken
    }
  });
  if([401,403].includes(response.status)){
    throw new HTTPResponseError(response)
  }
  const data = await response.json();
  return data
}

class HTTPResponseError extends Error {
	constructor(response) {
		super(`HTTP Error Response: ${response.status} ${response.statusText}`);
		this.response = response;
	}
}

const body = {"embeds":
[
     {
      "title": "Aquablation Therapy in Large Prostates (80-150 mL) for Lower Urinary Tract Symptoms Due to Benign Prostatic Hyperplasia: Final WATER II 5-Year Clinical Trial Results",
      "description": "CONCLUSIONS: At 5-years of prospective follow-up, the Aquablation procedure was shown to be safe with durable efficacy and low rates of retreatment in men with large prostates (80-150 mL).",
      "author": {
        "name": "Naeem Bhojani et al."
      },
      "url": "https://pubmed.ncbi.nlm.nih.gov/37115632"
    },
    {
      "title": "Efficacy of a bacterial 6-phytase supplemented beyond traditional dose levels on jejunal mucosa-associated microbiota, ileal nutrient digestibility, bone parameters, and intestinal health, and growth performance of nursery pigs",
      "description": "This study aimed to determine the efficacy of a bacterial 6-phytase (Buttiauxella spp.) supplemented beyond traditional dose levels based on jejunal mucosa-associated microbiota, apparent ileal digestibility (AID), intestinal health and bone parameters, and growth performance of nursery pigs. Seventy-two weaned pigs (36 barrows and 36 gilts at 21 d of age with 5.8 ± 0.5 kg BW) were allotted to six treatments based on randomized complete block design with sex and initial BW as blocks and fed in...",
      "author": {
        "name": "Vitor Hugo C Moita & Sung Woo Kim"
      },
      "url": "https://pubmed.ncbi.nlm.nih.gov/37115619"
    },
    {
      "title": "Apple puree as a natural fructose source provides an effective alternative carbohydrate source for fuelling half-marathon running performance",
      "description": "Carbohydrate supplementation during endurance exercise is known to improve performance, but the effects of food-based approaches in running exercise are understudied. Therefore, this study investigated the performance and gastrointestinal (GI) effects of a carbohydrate supplement containing a natural fructose source compared with a highly processed fructose source in a combined glucose-fructose supplement, during a half-marathon. Eleven trained runners (9 males, 2 females; age 32 ± 8 y, 89:53 ±...",
      "author": {
        "name": "Kirsty M Reynolds et al."
      },
      "url": "https://pubmed.ncbi.nlm.nih.gov/37115611"
    },
    {
      "title": "Effects of Smartphone-Based Remote Interventions on Dietary Intake, Physical Activity, Weight Control, and Related Health Benefits Among the Older Population With Overweight and Obesity in China: Randomized Controlled Trial",
      "description": "CONCLUSIONS: Remote dietary and physical activity interventions can improve dietary intake among participants with overweight and obesity, are beneficial for weight control, and have potential health benefits.",
      "author": {
        "name": "Na Zhang et al."
      },
      "url": "https://pubmed.ncbi.nlm.nih.gov/37115608"
    },
    {
      "title": "Intervening on Social Comparisons on Social Media: Electronic Daily Diary Pilot Study",
      "description": "CONCLUSIONS: Initial evidence from this pilot study suggests that a web-based social savoring intervention may help minimize the potentially harmful consequences of social media use, at least in some domains. Future work is needed to examine the effectiveness and acceptance of this intervention in different age groups and in clinical samples that are in part characterized by higher levels of comparison with others (eg, people with eating disorders).",
      "author": {
        "name": "Fernanda C Andrade et al."
      },
      "url": "https://pubmed.ncbi.nlm.nih.gov/37115607"
    }
]}
