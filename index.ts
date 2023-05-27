import { backOff, BackoffOptions } from "exponential-backoff";

function getWeather() {
  return fetch("weather-endpoint");
}

async function main() {
  try {
    const response = await backOff(() => getWeather());
    // process response
  } catch (e) {
    // handle error
  }
}

main();





import fetch from 'node-fetch'
import getSecret from './libs/getSecret'
exports.handler = async (event, context, callback) => {

  const discordToken = await getSecret('production')
  const url = `https://discord.com/api/v10/channels/803429347750576141/messages`
  const backoffOptions: BackoffOptions = {
    jitter: "full",
    numOfAttempts: 5,
    maxDelay: 20
  }
  const response = await backOff(()=>
    fetch(url, {
	method: 'post',
	body: JSON.stringify(body),
	headers: {
          'Content-Type': 'application/json',
          'Authorization': discordToken
        }
     })
  )

  if([401,403].includes(response.status)){
    throw new HTTPResponseError(response)
  }
  return response.status
  const data = await response.json();
  return data
}

class HTTPResponseError extends Error {
	constructor(response) {
		super(`HTTP Error Response: ${response.status} ${response.statusText}`);
		this.response = response;
	}
}


const body = {"embeds":[{"title":"Assessment of equity and efficiency of magnetic resonance imaging services in Henan Province, China","description":"CONCLUSIONS: Although the overall equity of configuration at the provincial level is relatively good, equity varies at the municipal level. Our results demonstrate a low MRI utilization efficiency; accordingly, policymakers should dynamically adjust the policy based on equity and efficiency.","author":{"name":"Xiaoling Huang et al."},"url":"https://pubmed.ncbi.nlm.nih.gov/37221536"},{"title":"Characteristics of idiopathic pulmonary fibrosis -associated cough. a case-control study","description":"CONCLUSION: Cough in early stage IPF patients was not distinguishable from chronic cough in the community-based population by LCQ. Especially, there was no difference in the self-reported frequency of cough-associated sputum production.","author":{"name":"Eeva Saari et al."},"url":"https://pubmed.ncbi.nlm.nih.gov/37221535"},{"title":"Oral contraceptive pills shortage in Lebanon amidst the economic collapse: a nationwide exploratory study","description":"CONCLUSIONS: OCPs shortage has seriously and negatively exposed women to various undesirable consequences including unplanned pregnancy and dysregulation of menses. Therefore, there is an urgent need to bring the attention of healthcare authorities to support the national pharmaceutical industry in manufacturing affordable OCPs generics to meet women's reproductive health demands.","author":{"name":"Rania Itani et al."},"url":"https://pubmed.ncbi.nlm.nih.gov/37221534"},{"title":"Influence of Er:YAG laser irradiation on the outcomes of alveolar ridge preservation at the infected molar sites: a randomized controlled trial","description":"CONCLUSIONS: ARP with Er:YAG laser irradiation seemed to improve bone healing by regulating osteogenesis-related factor expression in the early stage at infected sites.","author":{"name":"Yong Zhou et al."},"url":"https://pubmed.ncbi.nlm.nih.gov/37221532"},{"title":"Assessing the impact of a knowledge translation intervention on physical therapists' self-efficacy and implementation of motor learning practice","description":"CONCLUSIONS: Findings support the positive effect of an educational tool, most prominently on physical therapists' ML self-efficacy. The addition of practical modeling or ongoing educational support may enhance intervention effects.","author":{"name":"Michal Kafri et al."},"url":"https://pubmed.ncbi.nlm.nih.gov/37221530"},{"title":"Estimation of health literacy levels in patients with cardiovascular diseases in a Gulf country","description":"CONCLUSION: The inadequate HL levels found in outpatients with CVD is a major health concern in the UAE. To improve population health outcomes, health system interventions, including targeted educational and behavioral programs for the older population are necessary.","author":{"name":"Satish Chandrasekhar Nair et al."},"url":"https://pubmed.ncbi.nlm.nih.gov/37221529"},{"title":"The efficacy of manual toothbrushes in patients with fixed orthodontic appliances: a randomized clinical trial","description":"CONCLUSIONS: Plaque was significantly removed by the conventional FT toothbrush after a single brushing compared to the OT and CA types.","author":{"name":"Fathima Fazrina Farook et al."},"url":"https://pubmed.ncbi.nlm.nih.gov/37221525"},{"title":"Comparison of unipedicular and bipedicular kyphoplasty for treating acute osteoporotic vertebral compression fractures in the lower lumbar spine: a retrospective study","description":"CONCLUSIONS: The clinical and radiological results of unipedicular percutaneous kyphoplasty for treating osteoporotic vertebral compression fractures in the lower lumbar region were similar to those of bipedicular percutaneous kyphoplasty. However, the unipedicular approach resulted in shorter surgical time, less blood loss, and less bone cement leakage. Thus, the unipedicular approach may be preferable owing to its several advantages.","author":{"name":"Yunfan Qian et al."},"url":"https://pubmed.ncbi.nlm.nih.gov/37221523"},{"title":"Epidemiology of maxillofacial fractures in northwest China: an 11-year retrospective study of 2240 patients","description":"CONCLUSIONS: The maxillofacial fracture pattern is correlated with sex, age and aetiology. Patients were mainly young and middle-aged males, and the main cause of injury was RTAs, mostly causing compound fractures. Medical staff must be systematically educated to comprehensively examine patients with injuries resulting from RTAs. The management of patients with fractures requires thorough consideration of the patient's age, aetiology, fracture site, and concomitant injuries.","author":{"name":"Jingjing Mao et al."},"url":"https://pubmed.ncbi.nlm.nih.gov/37221520"},{"title":"Evaluation of immunogenicity of gene-deleted and subunit vaccines constructed against the emerging pseudorabies virus variants","description":"CONCLUSIONS: The SD-2017ΔgE/gI/TK live attenuated vaccine provided 100% protection against PRV variant challenge. Interestingly, the subunit vaccines with gB protein linked to DCpep and PorB protein as adjuvant may also be a promising and effective PRV variant vaccine candidate.","author":{"name":"Hong-Liang Zhang et al."},"url":"https://pubmed.ncbi.nlm.nih.gov/37221518"}],"server":"803429347750576138","channel":"1077344605688823869"}
const oldBody = {"embeds":
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
