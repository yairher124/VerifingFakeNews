
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogoIcon } from './icons/LogoIcon';

const Header: React.FC = () => {
    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `text-sm font-medium leading-normal ${
            isActive 
            ? 'text-primary dark:text-primary' 
            : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary'
        }`;

    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-2 sm:px-4 md:px-10 py-3">
            <div className="flex items-center gap-8">
                <NavLink to="/" className="flex items-center gap-4 text-text-light dark:text-text-dark">
                    <div className="size-6 text-primary">
                        <LogoIcon />
                    </div>
                    <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">VerifyVision</h2>
                </NavLink>
                <nav className="hidden md:flex items-center gap-9">
                    <NavLink to="/" className={navLinkClasses}>Home</NavLink>
                    <NavLink to="/methodology" className={navLinkClasses}>Methodology</NavLink>
                    <a href="#" className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">About</a>
                    <a href="#" className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Submit a Video</a>
                </nav>
            </div>
            <div className="flex flex-1 justify-end gap-2 sm:gap-4 md:gap-8">
                <label className="flex flex-col min-w-40 !h-10 max-w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                        <div className="text-text-muted-light dark:text-text-muted-dark flex border-none bg-surface-light dark:bg-surface-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-none bg-surface-light dark:bg-surface-dark focus:border-none h-full placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search" />
                    </div>
                </label>
                <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Contact</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
