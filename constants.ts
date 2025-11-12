
import { IVerificationCase, VerdictStatus } from './types';

export const VERIFICATION_CASES: IVerificationCase[] = [
  {
    id: '1',
    title: 'Footage of recent airstrike on Gaza hospital.',
    claim: 'Claim: Video shows missile strike on Al-Shifa Hospital courtyard on November 3, 2023',
    description: 'This video is from a different conflict in 2021, not the recent event.',
    verdict: VerdictStatus.Misleading,
    date: 'Oct 26, 2023',
    source: 'X',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXudMgmh4vbCYnpH9YRuauyX46sJ96hS19wbTY6PR0Ko26v-vZNks5FFR1B2DBEZNX27l5xKNzcqv1KTLXGkPU9varnWFt64e5OyE7s4fhDuF7CMk3Z5c98HI9S4euNOUpML31OAdxhLGL84_J0LoJaqnvhAQ0tchdQ70jnoVXWzfNMGWU9D0LSw5h2gAJzgyyucDWD0DY1VV3jrCLGdbmwi6mzrKgwiHqJjUmpMy09fpyRiPjaK7aR8imIjuZN5ABXGXcxegO2DJJ',
    imageAlt: 'Explosion at night in a city.',
    videoUrl: 'https://www.youtube.com/embed/g_TEAonNPs4',
    report: {
      publishedDate: 'November 4, 2023',
      summary: 'This video, while authentic, was filmed in 2018 in Syria and is being re-shared with a false context claiming it is from the current conflict in Gaza. Geolocation confirms the original location, and reverse image searches prove the date is incorrect.',
      steps: [
        {
          title: 'Reverse Image Search',
          icon: 'image_search',
          description: 'Keyframes from the video were run through multiple reverse image search engines. The earliest instances of this video were found in news reports and social media posts from 2018 related to the conflict in Syria.',
          evidence: {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChy6cMElrxJm1Gz6X9J95c55FUpdPtKZK5ptMeG5AGXymmvac9fYRmDKghEQ9DF3Xk0dbZkwAaOq5tEwMsbsi8qa0m_wH4vcTarlZVUYAdgQOVq77rm1NMylDhWmZXMFPF5eD5FcRF7rMS5kxZ_31YueVuemvj0Uacc6oCqlo4seJ332vC5MN93DKuhCugEAmq3Az-d16Rc_2k84mJ6KcjVRP0qGV5MfDyWQCGmO4w0VKvdl6uOB20mx4PE_pcWLCTZAiOjI0tTE0U',
            caption: 'TinEye search results showing the video first appeared online in March 2018.'
          }
        },
        {
          title: 'Geolocation',
          icon: 'location_on',
          description: 'Visual cues in the video, such as building architecture and specific landmarks, were cross-referenced with satellite imagery. The location was confirmed to be a market square in Idlib, Syria, not the Al-Shifa Hospital in Gaza.',
          evidence: {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByBqAkEyujZ8_GuqzrxyUNaF0Id-Okf20khutivzp_MJsaanSUlRBfrAa1L7D3VzR9m_4VVSC08xZ6_BtbhKefGOHR8SwoGwOsVzJ8rP8rvnRGo1oJ89WgZ6DU3-ot65ZjlrQaR28uK7eTuSQJYrdIoeRMWc5BON23_437T_xR8T2cX8OdUKlYeOFsp1Yjz5-gsIFEBqFXkC8SiYjYBPbUJ_iARowPu1lNWvtUS9Fjc-l9Tr4fV8GJCDupjHz_t-hUY--mx9IUsWzy',
            caption: 'Comparison between a video frame (left) and Google Earth satellite view of Idlib, Syria (right).'
          }
        },
        {
          title: 'Contextual Signals',
          icon: 'forum',
          description: 'The dialect of Arabic spoken in the video is consistent with that of the Syrian region, not Palestinian Arabic. Furthermore, no credible news outlets reported a missile strike on Al-Shifa\'s courtyard on the claimed date.'
        }
      ],
      conclusion: 'Based on multiple points of evidence, this video does not depict an event in Gaza in November 2023. It is old footage from the Syrian conflict being recirculated with a false and misleading narrative. This is a common misinformation tactic known as "false context."'
    }
  },
  {
    id: '2',
    title: 'Video shows soldiers celebrating at Al-Shifa.',
    claim: 'Claim: Video shows soldiers inside Al-Shifa hospital celebrating.',
    description: 'The uniforms and location do not match the claim.',
    verdict: VerdictStatus.Fake,
    date: 'Oct 25, 2023',
    source: 'Telegram',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxkDHJ1qK2jwaHDx8g__-appbTudYMGNlASje3I5i-ZpQ8SQWZt68rJnRjAaxiGD643or4BqawBYVmbRghyzEWbbsiAqczjZ4zWh_ZD_bQ4SV-05jpy2bONbJAwFb8ovWaXHi_Ajv1mcRowSH6xT0fxdZsQTBPVcJiApubRjVjUULqbLmnT9-tYi3B8tY8WAkzC2yy1OBkQ3PooGPNK5_6m55eBMy2EcvReo_R_kqLFb0WGR4TxG-uM8E0lMQmBco4ypcKQ0LAsVaO',
    imageAlt: 'Soldiers in military gear standing indoors.',
    report: {
      publishedDate: 'October 26, 2023',
      summary: 'This video is digitally altered. The background is from a hospital tour video, but the soldiers have been superimposed into the footage. Forensic analysis reveals inconsistencies in lighting and shadows.',
      steps: [
         {
          title: 'Video Forensics',
          icon: 'movie_filter',
          description: 'Frame-by-frame analysis reveals artifacts around the soldiers inconsistent with the background. The lighting on the soldiers does not match the ambient light of the hospital corridor.',
         }
      ],
      conclusion: 'The video is a composite and therefore categorized as Fake.'
    }
  },
  {
    id: '3',
    title: 'Satellite imagery confirms building damage.',
    claim: 'Claim: Satellite imagery shows damage to buildings in Northern Gaza.',
    description: 'Verified through analysis of commercial satellite imagery.',
    verdict: VerdictStatus.Authentic,
    date: 'Oct 17, 2023',
    source: 'Maxar',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8B31vK8BmqbhfcJUswKV70ZjFyvjRDufdPJ_xtc3e46i1hEVCM6rUPNKS4qg7vLAaaSkj2nc_WJmI_PvwIR_iuQWSSw-RFyYF125Hf0FrKVIfll3AbhpjaGIwOCCVuhi-a3jhmyWhxoeV1L3I8t4-jbA8uEL2543su8cGmtgFeOK1nyEtRYhb-QfEM7NYklM6FWTxFPM1iPrh37-_j6p8gsabDODZIlY7udv4sb3W6Oo1YKdraZ3wcjvDMNmQ-hqhDMBUpvjQ2zdQ',
    imageAlt: 'Satellite imagery of buildings.',
     report: {
      publishedDate: 'October 18, 2023',
      summary: 'Commercial satellite imagery from Maxar Technologies, taken on October 17, 2023, was compared with archival imagery from before the conflict. The comparison confirms significant damage to multiple structures in the specified area.',
      steps: [
         {
          title: 'Geolocation',
          icon: 'location_on',
          description: 'The coordinates of the area shown in the imagery were confirmed to be within Northern Gaza using publicly available mapping data.',
         },
         {
          title: 'Temporal Checks',
          icon: 'calendar_month',
          description: 'The satellite image is dated October 17, 2023. This was cross-referenced with archival imagery from the same location from September 2023, showing the structures intact.',
         }
      ],
      conclusion: 'The satellite imagery is authentic and accurately depicts damage in the claimed location and timeframe.'
    }
  },
  {
    id: '4',
    title: 'Authentic footage of aid distribution.',
    claim: 'Claim: Footage shows aid being distributed by UNRWA.',
    description: 'Cross-referenced with on-the-ground reports.',
    verdict: VerdictStatus.Authentic,
    date: 'Oct 23, 2023',
    source: 'Reuters',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC9ecqKh_qBOFjEqn-FKALYyqYQEy6DbVOHWSg5ifEKGqxm6zSxmlhfg4eMSwG0lb96iqLJ_U4NM5ssaJatRNfemeNFQNqZHj4lmP1tXjCh5b4l1GSVhn3N5lTNBgIqwCGew8X9a5IGtpZUNv-9xDvN7qM8ajSZqahhbxkiSWQ_EDveBLMIPGHO8A3Wdqdts49wENo6r5bVqcsDcpRpuxQh1C8cK0QO2xN3rxX5nOgNiPIRU1zOt-zzEtgSZau8i1cCbgfZsrhLbnH',
    imageAlt: 'People receiving aid packages.',
     report: {
      publishedDate: 'October 24, 2023',
      summary: 'The footage was confirmed by multiple sources, including Reuters journalists on the ground and official statements from aid organizations operating in the area.',
      steps: [
         {
          title: 'Source Cross-Check',
          icon: 'fingerprint',
          description: 'The video was initially published by a verified Reuters journalist. Other news agencies and NGOs later published similar footage from the same event, corroborating the authenticity.',
         }
      ],
      conclusion: 'The footage is authentic and accurately depicts the event as claimed.'
    }
  },
  {
    id: '5',
    title: 'AI-generated image of a destroyed city.',
    claim: 'Claim: A photo shows a destroyed city in Gaza.',
    description: 'Visual analysis shows clear signs of AI generation.',
    verdict: VerdictStatus.Fake,
    date: 'Oct 18, 2023',
    source: 'Facebook',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4MAK89t2SWP3y7LxqLc254EdVpm2Spg1TASFVjPuYJDMcD1RXQPxJEHasVNhis_RIAbpARqOdU5lK3-BKX2MOntjI53esq0Y9Vl6bYbFApOz-nMupYAlx-Q1s862Tz6EHRUxl-u61c93Nxpv5AWb3qhInctK2kaccoTckk_ZpDx29RMrtl3TEIq8xPtwvFtDmTsqn6TdR-UX0QH96dktVJ7mQSUsze1cyFnwoNA9Mo2GfSsWzYNpqj5-dDIlCRKFDS9-iSEspwoZd',
    imageAlt: 'Abstract image of digital code.',
     report: {
      publishedDate: 'October 19, 2023',
      summary: 'The image displays common artifacts of AI image generation, including unnaturally smooth textures, illogical structures, and distorted details upon close inspection. It does not correspond to any real location.',
      steps: [
         {
          title: 'Video Forensics',
          icon: 'movie_filter',
          description: 'Analysis using AI detection tools and manual inspection revealed inconsistencies typical of generative AI. For example, some buildings merge into each other, and details like windows are malformed.',
         }
      ],
      conclusion: 'The image is confirmed to be AI-generated and does not represent a real scene. It is Fake.'
    }
  },
  {
    id: '6',
    title: 'Unverified claim of a ceasefire.',
    claim: 'Claim: A message circulating on WhatsApp announces an imminent ceasefire.',
    description: 'No official sources have confirmed this information.',
    verdict: VerdictStatus.Unverified,
    date: 'Oct 15, 2023',
    source: 'WhatsApp',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQA-hsLk0voJJ5Qdoor0Fzgvtey6lktM30UkYButCnqmP3mhj0iBRP55YHLuHtizzQqMvIJMsPfuQvqAt6GMT2_fBacGVLv43kvhHq9_3VlaTprl3SQMNTq2ALUVgLyq9GzJgCAsplkPbY8_86HvMlcKbz5PaK1yK88lA6ZWKdqk0-MFjmIP6jLQ7jfBvxw6KneGcFlSBhPrzZEon9xzronXucQWxhsPasS6FoJ97XgadMg060Ty-oBlhtwv0PJE04Kry09qvttvDd',
    imageAlt: 'Smartphone screen showing a messaging app.',
     report: {
      publishedDate: 'October 16, 2023',
      summary: 'At the time of verification, no credible sources, including governments, official news media, or international bodies, have confirmed the ceasefire claim. The message is circulating without attribution.',
      steps: [
         {
          title: 'Source Cross-Check',
          icon: 'fingerprint',
          description: 'We traced the claim across multiple platforms but could not find an original, credible source. All instances appear to be forwarded messages.',
         }
      ],
      conclusion: 'Without confirmation from reliable sources, the claim remains Unverified.'
    }
  },
];
