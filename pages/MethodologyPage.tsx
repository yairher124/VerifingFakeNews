
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MethodologyPage: React.FC = () => {
    const steps = [
        { icon: 'data_object', title: '1. Metadata Extraction', description: "We analyze the video's underlying data to find initial clues, such as creation date, camera type, and software used. This helps establish a baseline for the media's origin.", tools: 'YouTube Data API, ExifTool' },
        { icon: 'image_search', title: '2. Reverse Image & Keyframe Search', description: 'Key frames from the video are extracted and searched across the web to find earlier instances. This process is crucial for identifying if the video is old footage being presented as new.', tools: 'InVID/WeVerify, Google Lens, TinEye' },
        { icon: 'location_on', title: '3. Geolocation', description: 'Our analysts identify visual clues within the video—like buildings, landmarks, and terrain—and cross-reference them with satellite imagery and mapping services to confirm the exact location of the event.', tools: 'Google Maps, Sentinel Hub, SunCalc' },
        { icon: 'calendar_month', title: '4. Temporal Checks', description: 'We verify the date and time of the recording by analyzing shadows (chronolocation), checking weather conditions against historical archives, and reviewing news reports of events in the area.', tools: 'Weather archives, Historical news reports' },
        { icon: 'fingerprint', title: '5. Source Cross-Check', description: "We investigate the original uploader and the platform where the media first appeared. We assess the source's history and potential biases to understand their credibility and motivation.", tools: 'Social media analysis, WHOIS lookups' },
        { icon: 'movie_filter', title: '6. Video Forensics', description: 'The media is analyzed for signs of digital manipulation, such as edits, CGI, or deepfakes. We inspect for inconsistencies in lighting, shadows, and audio to detect alterations.', tools: 'Forensic analysis software, Frame-by-frame review' },
        { icon: 'hub', title: '7. Contextual Signals', description: "We review surrounding events, official statements, and reports from credible sources to ensure the video's claims align with the broader context of the situation it purports to show.", tools: 'News aggregators, Expert consultation' },
        { icon: 'verified_user', title: '8. Human Review & Verdict', description: 'Finally, our expert analysts synthesize all collected evidence. The findings undergo a rigorous peer-review process before a final verdict—such as "Verified," "Misleading," or "Unproven"—is published with a detailed explanation.', tools: 'Analyst review platform, Peer review' }
    ];

    return (
        <>
            <Header />
            <main>
                <div className="@container pt-5">
                    <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row @[864px]:items-center">
                        <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                            <div className="flex flex-col gap-2 text-left">
                                <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Our Verification Methodology</h1>
                                <h2 className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">At VerifyVision, we are committed to combating misinformation with a transparent, evidence-based process. This page outlines the rigorous, multi-step methodology our analysts use to verify every piece of media.</h2>
                            </div>
                        </div>
                        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg @[480px]:h-auto @[480px]:min-w-[300px] @[864px]:w-[40%]" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuANKmYTrVtg0ziy3nWkgeQubdtuZavU8az4eL5eIpWOUMnszTQNle4Z1YYRecIMPaitTp9uOsmXhD1UGiOVM8OX4GouPm8GZpFFn26k6wJzwJ9puQLl_HWdNvAxmpGefCPZs_ugLV9TutvgmeYYLOIx4UKQJo7a4gLYYZL-RgcoLj_Xle8I62UfYz7-0ClSk8VEyLXfFbkebuBhonpEQbIoDmK9iBHBjskaRQKPRNiD6b_pueqa7welcDPUTJmpDV2agzbnEp9WNp4Q")` }}></div>
                    </div>
                </div>

                <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">The Verification Checklist</h2>
                
                <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.title}>
                            <div className="flex flex-col items-center gap-1 pt-3">
                                <div className="text-primary flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 shrink-0">
                                    <span className="material-symbols-outlined">{step.icon}</span>
                                </div>
                                {index < steps.length - 1 && <div className="w-[1.5px] bg-border-light dark:bg-border-dark h-full grow"></div>}
                            </div>
                            <div className="flex flex-1 flex-col py-3 pb-8">
                                <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">{step.title}</p>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal mt-1">{step.description}</p>
                                <p className="text-text-muted-light/80 dark:text-text-muted-dark/80 text-sm font-normal leading-normal mt-2">Tools used: {step.tools}</p>
                            </div>
                        </React.Fragment>
                    ))}
                </div>

                <div className="@container">
                    <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                        <div className="flex flex-col gap-2 text-center items-center">
                            <h1 className="text-text-light dark:text-text-dark tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Apply Critical Thinking to Online Media</h1>
                            <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal max-w-[720px]">Our mission is to provide clarity in a world of digital noise. Explore our findings or learn more about the skills behind open-source intelligence.</p>
                        </div>
                        <div className="flex flex-1 justify-center">
                            <div className="flex justify-center">
                                <div className="flex flex-1 gap-3 flex-wrap max-w-[480px] justify-center">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                                        <span className="truncate">Explore Our Verifications</span>
                                    </button>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-border-light dark:bg-surface-dark text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                                        <span className="truncate">Learn More About OSINT</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default MethodologyPage;
