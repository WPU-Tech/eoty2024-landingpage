const renderContent = async (accessToken, tokenType) => {
    const formContainer = document.getElementById("form-container");

    const discordLogin = document.createElement("button");
    discordLogin.type = "button";
    discordLogin.className = "uppercase flex items-center justify-center w-full p-2 gap-3 text-white bg-[#5765F2] rounded border-4 border-[#483f3f] transition-all ease-out shadow-[-2px_2px_0px_#483F3F] hover:shadow-[0px_0px_0px_#483F3F]";
    discordLogin.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" class="size-6">
            <path
                fill="#fff"
                d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
            />
        </svg>
        <span class="text-lg tracking-wider">Connect Discord</span>
    `;

    const discordUrl = new URL("https://discord.com/oauth2/authorize");
    discordUrl.searchParams.append("client_id", "856941607973814332");
    discordUrl.searchParams.append("response_type", "token");
    discordUrl.searchParams.append("redirect_uri", window.location.href);
    discordUrl.searchParams.append("scope", "identify");

    discordLogin.addEventListener("click", () => {
        window.location.href = discordUrl;
    });

    if (!accessToken) {
        formContainer.replaceChildren(discordLogin);
    } else {
        try {
            const res = await fetch("https://discord.com/api/users/@me", {
                headers: {
                    Authorization: `${tokenType} ${accessToken}`,
                },
            });

            if (!res.ok) throw new Error("Failed to fetch user data");

            const user = await res.json();
            if (!user) throw new Error("Failed to parse user data");

            const discordUser = document.createElement("div");
            discordUser.className = "flex justify-center items-center gap-2";
            discordUser.innerHTML = `
                <div class="size-8 bg-gray-500 rounded-full overflow-hidden">
                    <img src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png" alt="${user.username}" class="size-8 object-cover object-center" />
                </div>
                <span class="text-lg tracking-wider">${user.username}</span>
            `;

            const form = document.createElement("form");
            form.className = "space-y-6 w-full";
            form.innerHTML = `
                <div class="space-y-2">
                    <div class="relative w-full p-2 flex flex-col bg-white rounded border-4 border-[#483f3f] shadow-[-2px_2px_0px_#483F3F]">
                        <label for="name" class="uppercase tracking-wider">Name</label>
                        <input required type="text" name="name" id="name" class="font-montserrat focus:outline-none font-semibold" placeholder="Your Name" />
                    </div>
                    <p id="name-error" class="font-montserrat text-red-500 text-sm hidden"></p>
                </div>
                <div class="space-y-2">
                    <div class="relative w-full p-2 flex flex-col bg-white rounded border-4 border-[#483f3f] shadow-[-2px_2px_0px_#483F3F]">
                        <label for="email" class="uppercase tracking-wider">Email</label>
                        <input required type="email" name="email" id="email" class="font-montserrat focus:outline-none font-semibold" placeholder="Email" />
                    </div>
                    <p id="email-error" class="font-montserrat text-red-500 text-sm hidden"></p>
                </div>
                <div class="space-y-2">
                    <div class="relative w-full flex flex-col bg-white rounded border-4 border-[#483f3f] shadow-[-2px_2px_0px_#483F3F]">
                        <label for="occupation" class="uppercase tracking-wider absolute top-2 left-2">Occupation</label>
                        <select required name="occupation" id="occupation-select" class="font-montserrat font-semibold focus:outline-none bg-transparent appearance-none cursor-pointer p-2 mt-6">
                            <option value="professional IT">Professional IT</option>
                            <option value="professional non IT">Professional non IT</option>
                            <option value="student">Student</option>
                            <option value="other">Other</option>
                        </select>
                        <div class="absolute top-2/4 right-2 -translate-y-2/4 rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-chevron-down size-6 min-w-6 lg:size-8 lg:min-w-8"
                            >
                                <path d="m18 15-6-6-6 6"></path>
                            </svg>
                        </div>
                    </div>
                    <p id="occupation-error" class="font-montserrat text-red-500 text-sm hidden"></p>
                </div>
                <div class="space-y-2">
                    <div class="relative w-full flex flex-col bg-white rounded border-4 border-[#483f3f] shadow-[-2px_2px_0px_#483F3F]">
                        <label for="source" class="uppercase tracking-wider absolute top-2 left-2">How do you know this event?</label>
                        <select required name="source" id="source-select" class="font-montserrat font-semibold focus:outline-none bg-transparent appearance-none cursor-pointer p-2 mt-6">
                            <option value="discord">Discord</option>
                            <option value="youtube">Youtube</option>
                            <option value="instagram">Instagram</option>
                            <option value="tiktok">Tiktok</option>
                            <option value="facebook">Facebook</option>
                            <option value="twitter">Twitter/X</option>
                            <option value="other">Other</option>
                        </select>
                        <div class="absolute top-2/4 right-2 -translate-y-2/4 rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-chevron-down size-6 min-w-6 lg:size-8 lg:min-w-8"
                            >
                                <path d="m18 15-6-6-6 6"></path>
                            </svg>
                        </div>
                    </div>
                    <p id="source-error" class="font-montserrat text-red-500 text-sm hidden"></p>
                </div>

                <p class="text-gray-500 text-sm font-montserrat font-semibold xl:hidden">
                    * Please ensure your details are accurate as these will be used for your certificate.
                </p>

                <button
                    type="submit"
                    class="uppercase text-lg tracking-wider flex items-center justify-center w-full p-2 gap-2 text-white bg-[#FF5508] disabled:opacity-50 rounded border-4 border-[#483f3f] transition-all ease-out shadow-[-2px_2px_0px_#483F3F] hover:shadow-[0px_0px_0px_#483F3F]"
                >
                    Register
                </button>

                <p id="message-box" data-state="unknown" class="data-[state=unknown]:hidden w-full rounded border bg-gray-100 data-[state=error]:border-red-600 data-[state=error]:bg-red-100 data-[state=success]:border-green-600 data-[state=success]:bg-green-100 flex flex-col gap-0.5 p-4 text-center font-montserrat text-sm">
                </p>
            `;

            formContainer.replaceChildren(discordUser);
            formContainer.appendChild(form);

            const loadingSpinner = document.createElement("div");
            loadingSpinner.innerHTML = `
                <svg class="animate-spin -ml-1 mr-2 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-30" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            `;

            const submitButton = form.querySelector("button[type=submit]");
            const messageBox = form.querySelector("#message-box");

            form.addEventListener("submit", async (event) => {
                event.preventDefault();

                submitButton.innerHTML = "Registering...";
                submitButton.prepend(loadingSpinner);
                submitButton.disabled = true;

                try {
                    const formData = new FormData(form);
                    formData.append("token", accessToken);
                    const data = Object.fromEntries(formData);

                    const res = await fetch("https://codeground-api.wpu.run/register", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    });

                    const result = await res.json().catch((e) => {
                        throw new Error("Failed to register. Please try again later.");
                    });
                    if (res.status !== 200) throw new Error(result.message);

                    messageBox.dataset.state = "success";
                    messageBox.innerHTML = "Registration successful!";
                } catch (error) {
                    messageBox.dataset.state = "error";
                    messageBox.innerHTML = error.message || "Failed to register. Please try again later.";
                } finally {
                    submitButton.innerHTML = "Register";
                    submitButton.disabled = false;
                }
            });
        } catch (error) {
            formContainer.replaceChildren(discordLogin);
        }
    }
};

document.addEventListener("DOMContentLoaded", async function () {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get("access_token"), fragment.get("token_type")];
    await renderContent(accessToken, tokenType);
});
