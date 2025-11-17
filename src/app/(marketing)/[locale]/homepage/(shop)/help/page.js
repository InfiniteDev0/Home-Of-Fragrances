"use client";
import { ChevronLeft, ListFilter } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faQquestion } from "@/data/constants";


const Helppage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showFAQ = searchParams.has("faq");
  const [fade, setFade] = useState(false);

  // Fade effect on switch
  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => {
      setFade(false);
    }, 250);
    return () => clearTimeout(timeout);
  }, [showFAQ]);

  // Handler for FAQ navigation
  const handleFAQNav = () => {
    router.push("/eng-e1/homepage/help?faq");
  };
  const handleBackNav = () => {
    router.push("/eng-e1/homepage/help");
  };

  return (
    <div>
      <div className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-200 flex items-center justify-between px-10 py-4">
        <div>
          <h1 className="font-semibold text-lg flex items-center gap-2">
            HOME OF FRAGRANCES HELP CENTER.
          </h1>
          <p className="text-xs text-gray-500 font-semibold">
            Need our help u have come to the right place
          </p>
        </div>

        <button
          className="flex items-center text-xs font-semibold gap-2 p-2 px-4 rounded-3xl border border-gray-300 w-fit cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={handleFAQNav}
          aria-pressed={showFAQ}
          aria-label={showFAQ ? "Show Help Center" : "Show FAQ"}
        >
          <ListFilter className="w-3 h-3" /> FAQ
        </button>
      </div>
      <AnimatePresence mode="wait">
        {!showFAQ ? (
          <motion.aside
            key="help"
            className={`!pb-10 bg-white text-black z-[210] shadow-2xl overflow-y-auto transition-opacity duration-300 ${
              fade ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "tween", duration: 0.22 }}
            aria-modal="true"
            role="dialog"
          >
            {/* help center  */}
            <div className="min-h-screen max-w-7xl mx-auto flex flex-col gap-5 pt-[160px] py-25 px-10">
              {/* terms of use */}
              <div>
                <h1 className="font-semibold text-xl flex items-center gap-2">
                  Terms of Use
                </h1>
                <div className="text-xs text-gray-700 font-semibold mt-2 flex flex-col gap-2">
                  <p>
                    <strong>What is Home of Fragrances?</strong> <br />
                    Home of Fragrances is a fragrance discovery and review
                    platform. We provide tools to explore perfumes, post
                    reviews, and interact with the community.
                  </p>
                  <p>
                    <strong>User Responsibilities:</strong>
                  </p>
                  <ul className="list-disc ml-4">
                    <li>Post honest reviews and feedback.</li>
                    <li>No abusive, harassing, or illegal content.</li>
                    <li>Respect other users and the community guidelines.</li>
                  </ul>
                  <p>
                    <strong>Content Ownership:</strong>
                  </p>
                  <ul className="list-disc ml-4">
                    <li>Your images, writing, and comments belong to you.</li>
                    <li>
                      Our platform design, brand assets, and layout belong to
                      us.
                    </li>
                  </ul>
                  <p>
                    <strong>Use Restrictions:</strong>
                  </p>
                  <ul className="list-disc ml-4">
                    <li>No scraping or automated data extraction.</li>
                    <li>No copying or exporting our database.</li>
                    <li>No harassment or abusive behavior.</li>
                  </ul>
                  <p>
                    <strong>Account Termination:</strong> <br />
                    We may suspend or terminate accounts that violate our
                    policies or community guidelines.
                  </p>
                  <p>
                    <strong>Age Minimum:</strong> <br />
                    Recommended minimum age is 13+. For EU users, the minimum
                    age is 16+.
                  </p>
                  <p className="mt-2">
                    By using our platform, you agree to respect our community
                    guidelines, avoid abusive or illegal behavior, and not
                    misuse our data or services.
                  </p>
                </div>
              </div>
              {/* Privacy Policy */}
              <div>
                <h1 className="font-semibold text-xl flex items-center gap-2">
                  Privacy Policy
                </h1>
                <div className="text-xs text-gray-700 font-semibold mt-2 flex flex-col gap-2">
                  <p>
                    <strong>What data we collect:</strong>
                  </p>
                  <ul className="list-disc ml-4">
                    <li>Name (optional)</li>
                    <li>Email (only for login or support)</li>
                    <li>Search activity (to improve personalization)</li>
                    <li>Device info (basic analytics)</li>
                  </ul>
                  <p>
                    <strong>
                      What we do <span className="text-red-500">NOT</span>{" "}
                      collect:
                    </strong>
                  </p>
                  <ul className="list-disc ml-4">
                    <li>No creepy tracking</li>
                    <li>No selling data</li>
                    <li>No unnecessary permissions</li>
                  </ul>
                  <p>
                    <strong>How data is used:</strong>
                  </p>
                  <ul className="list-disc ml-4">
                    <li>To recommend fragrances</li>
                    <li>To personalize feeds</li>
                    <li>To send optional notifications</li>
                  </ul>
                  <p>
                    <strong>User rights:</strong>
                  </p>
                  <ul className="list-disc ml-4">
                    <li>Request deletion</li>
                    <li>Request export</li>
                    <li>Update profile</li>
                  </ul>
                  <p>
                    <strong>Security statement:</strong> <br />
                    We respect your privacy. Your data is never sold and is only
                    used to improve your experience—such as personalized
                    recommendations, saved favorites, and notifications you
                    choose to enable. You may request data deletion at any time.
                  </p>
                </div>
              </div>
              {/* Notifications */}
              <div>
                <h1 className="font-semibold text-xl flex items-center gap-2">
                  Notifications
                </h1>
                <div className="text-xs text-gray-700 font-semibold mt-2 flex flex-col gap-2">
                  <p>
                    <strong>Types of notifications:</strong>
                  </p>
                  <ul className="list-disc ml-4">
                    <li>New fragrance releases</li>
                    <li>Price drops</li>
                    <li>Influencer reviews</li>
                    <li>Comments on your posts</li>
                    <li>Followers / Likes (if applicable)</li>
                  </ul>
                  <p>
                    <strong>You control everything:</strong>
                  </p>
                  <ul className="list-disc ml-4">
                    <li>Email, push, and in-app alerts</li>
                    <li>
                      How to disable notifications: You can turn them on or off
                      at any time in your profile settings.
                    </li>
                    <div className="flex items-center gap-5 !p-3 mt-4 border w-fit">
                      <p>Enable App notification</p>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider"></span>
                      </label>
                    </div>
                  </ul>
                  <p className="mt-2">
                    Choose the notifications you want. You can turn them on or
                    off at any time.
                    <br />
                    We only send relevant updates — no spam, no ads from third
                    parties.
                  </p>
                </div>
              </div>
              {/* Contact Us */}
              <div>
                <h1 className="font-semibold text-xl flex items-center gap-2">
                  Contact Us
                </h1>

                <form className="space-y-4 mt-4 max-w-xl">
                  {/* Name */}
                  <div className="flex flex-col space-y-1">
                    <Label
                      htmlFor="name"
                      className="text-xs font-semibold text-gray-600"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="text-sm rounded-sm font-semibold"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-1">
                    <Label
                      htmlFor="email"
                      className="text-xs font-semibold text-gray-600"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="text-sm rounded-sm font-semibold"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col space-y-1">
                    <Label
                      htmlFor="subject"
                      className="text-xs font-semibold text-gray-600"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      className="text-sm rounded-sm font-semibold"
                    />
                  </div>

                  {/* Support Category */}
                  <div className="flex flex-col space-y-1">
                    <Label
                      htmlFor="category"
                      className="text-xs font-semibold text-gray-600"
                    >
                      Category
                    </Label>
                    <Select>
                      <SelectTrigger className="text-sm rounded-sm font-semibold">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="text-sm">
                        <SelectItem value="account">Account help</SelectItem>
                        <SelectItem value="brand">Brand partnership</SelectItem>
                        <SelectItem value="content">Content removal</SelectItem>
                        <SelectItem value="bug">Bug report</SelectItem>
                        <SelectItem value="general">
                          General questions
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-1">
                    <Label
                      htmlFor="message"
                      className="text-xs font-semibold text-gray-600"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Write your message..."
                      className="text-sm rounded-sm font-semibold"
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="rounded-2xl px-6 py-2 text-sm font-semibold"
                  >
                    Send Message
                  </Button>

                  {/* Support email */}
                  <p className="text-xs text-gray-700 mt-2">
                    Or email us directly at{" "}
                    <a
                      href="mailto:support@homeoffragrances.com"
                      className="underline text-blue-600"
                    >
                      support@homeoffragrances.com
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </motion.aside>
        ) : (
          <motion.aside
            key="faq"
            className={`!pb-10 bg-white text-black z-[210] shadow-2xl overflow-y-auto transition-opacity duration-300 ${
              fade ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "tween", duration: 0.22 }}
            aria-modal="true"
            role="dialog"
          >
            <div className="min-h-screen max-w-7xl mx-auto flex flex-col gap-5 pt-[160px] py-25 px-10">
              <button
                className="mb-6 w-fit px-4 py-2 flex items-center gap-5 rounded bg-gray-100 hover:bg-gray-200 text-sm font-semibold border border-gray-300"
                onClick={handleBackNav}
                aria-label="Back to Help Center"
              >
                <ChevronLeft /> Back to Help Center
              </button>
              <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-xl mb-2 flex items-center gap-2">
                  ✅ FAQ for Home Of Fragrances
                </h1>
                <p className="text-xs text-gray-500 font-semibold mb-4">
                  Best fragrance shop on the web
                </p>
                <div className="flex flex-col gap-3 text-sm">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1" // first answer visible
                  >
                    {faQquestion.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="font-semibold text-[15px] flex items-center gap-2">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          {Array.isArray(item.answer) ? (
                            item.answer.map((p, i) => <p key={i}>{p}</p>)
                          ) : (
                            <p className="text-xs text-gray-500 font-semibold">{item.answer}</p>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Helppage;
