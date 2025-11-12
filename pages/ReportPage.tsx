
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { VERIFICATION_CASES } from '../constants';
import { IVerificationCase, VerdictStatus } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ReportPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const caseData = VERIFICATION_CASES.find(c => c.id === id);

    if (!caseData) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold">Report not found</h1>
                <Link to="/" className="text-primary hover:underline mt-4 inline-block">Return to Home</Link>
            </div>
        );
    }
    
    const verdictStyles: Record<VerdictStatus, { text: string; bg: string, icon: string }> = {
        [VerdictStatus.Authentic]: { text: 'text-authentic', bg: 'bg-authentic/10', icon: 'check_circle' },
        [VerdictStatus.Misleading]: { text: 'text-misleading', bg: 'bg-misleading/10', icon: 'error' },
        [VerdictStatus.Fake]: { text: 'text-fake', bg: 'bg-fake/10', icon: 'cancel' },
        [VerdictStatus.Unverified]: { text: 'text-unverified', bg: 'bg-unverified/10', icon: 'help' },
    };

    const currentVerdictStyle = verdictStyles[caseData.verdict];

    return (
        <>
            <Header />
            <main className="layout-container flex h-full grow flex-col items-center">
                <div className="layout-content-container flex w-full max-w-4xl flex-1 flex-col p-4 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                        <Link className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary" to="/">Home</Link>
                        <span className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">/</span>
                        <span className="text-sm font-medium text-text-light dark:text-text-dark truncate">{caseData.claim}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8 flex flex-col gap-8">
                            <div className="flex flex-wrap justify-between gap-3">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-3xl lg:text-4xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark">{caseData.claim}</p>
                                    <p className="text-base font-normal text-text-muted-light dark:text-text-muted-dark">Published: {caseData.report.publishedDate}</p>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center bg-black/80 bg-cover bg-center aspect-video rounded-xl">
                                {caseData.videoUrl ? (
                                    <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full rounded-xl" frameBorder="0" src={caseData.videoUrl} title="YouTube video player"></iframe>
                                ) : (
                                    <img src={caseData.imageUrl} alt={caseData.imageAlt} className="w-full h-full object-cover rounded-xl" />
                                )}
                            </div>
                            <div id="verdict" className={`p-6 rounded-xl border border-border-light dark:border-border-dark ${currentVerdictStyle.bg.replace('bg-', 'dark:bg-').replace('/10', '/20')}`}>
                                <div className="flex flex-col items-stretch justify-start gap-4 @xl:flex-row @xl:items-start">
                                    <div className={`flex items-center justify-center size-16 rounded-full shrink-0 ${currentVerdictStyle.bg} ${currentVerdictStyle.text}`}>
                                        <span className="material-symbols-outlined text-4xl">{currentVerdictStyle.icon}</span>
                                    </div>
                                    <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2">
                                        <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">Verdict</p>
                                        <p className={`text-2xl font-bold leading-tight tracking-[-0.015em] ${currentVerdictStyle.text}`}>{caseData.verdict}</p>
                                        <p className="text-base font-normal text-text-muted-light dark:text-text-muted-dark">{caseData.report.summary}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">Verification Steps</h3>
                                {caseData.report.steps.map((step, index) => (
                                    <details key={index} id={step.title.replace(/\s+/g, '-')} className="group rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark" open={index === 0}>
                                        <summary className="flex cursor-pointer list-none items-center justify-between p-4">
                                            <div className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-primary">{step.icon}</span>
                                                <span className="text-lg font-bold text-text-light dark:text-text-dark">{step.title}</span>
                                            </div>
                                            <div className="transition-transform duration-200 group-open:rotate-180">
                                                <span className="material-symbols-outlined">expand_more</span>
                                            </div>
                                        </summary>
                                        <div className="border-t border-border-light dark:border-border-dark p-4 md:p-6 flex flex-col gap-6">
                                            <p className="text-text-muted-light dark:text-text-muted-dark">{step.description}</p>
                                            {step.evidence && (
                                                <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark">
                                                    <img className="w-full rounded-md" alt={`Evidence for ${step.title}`} src={step.evidence.image} />
                                                    <p className="mt-2 text-sm text-text-muted-light dark:text-text-muted-dark">Caption: {step.evidence.caption} {step.evidence.sourceLink && <a className="text-primary underline" href={step.evidence.sourceLink}>Source</a>}</p>
                                                </div>
                                            )}
                                        </div>
                                    </details>
                                ))}
                            </div>
                             <div id="conclusion" className="flex flex-col gap-4 p-6 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark">
                                <h3 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">Conclusion</h3>
                                <p className="text-text-muted-light dark:text-text-muted-dark">{caseData.report.conclusion}</p>
                                <div className="flex items-center justify-between mt-4 border-t border-border-light dark:border-border-dark pt-4">
                                    <p className="text-sm font-medium text-text-light dark:text-text-dark">Share this report:</p>
                                    <div className="flex items-center gap-2">
                                         <button className="flex items-center justify-center size-9 rounded-full bg-background-light dark:bg-background-dark hover:bg-primary/10 text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">link</span></button>
                                         <button className="flex items-center justify-center size-9 rounded-full bg-background-light dark:bg-background-dark hover:bg-primary/10 text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors"><svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path></svg></button>
                                         <button className="flex items-center justify-center size-9 rounded-full bg-background-light dark:bg-background-dark hover:bg-primary/10 text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path></svg></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside className="hidden lg:block lg:col-span-4">
                            <div className="sticky top-24 flex flex-col gap-4">
                                <h4 className="text-base font-bold text-text-light dark:text-text-dark">On this page</h4>
                                <ul className="space-y-2 border-l-2 border-border-light dark:border-border-dark">
                                    <li><a className="block border-l-2 border-primary -ml-0.5 pl-3 py-1 text-sm font-medium text-primary" href="#verdict">Verdict & Summary</a></li>
                                    {caseData.report.steps.map(step => (
                                         <li key={step.title}><a className="block border-l-2 border-transparent -ml-0.5 pl-3 py-1 text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark" href={`#${step.title.replace(/\s+/g, '-')}`}>{step.title}</a></li>
                                    ))}
                                    <li><a className="block border-l-2 border-transparent -ml-0.5 pl-3 py-1 text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark" href="#conclusion">Conclusion</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ReportPage;
