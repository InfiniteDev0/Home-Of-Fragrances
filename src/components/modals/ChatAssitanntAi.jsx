"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useEffect } from "react";
 // adjust path if needed

export default function ChatAssistantAi() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return; // ✅ only run if user exists

    if (!document.getElementById("openwidget-script")) {
      const script = document.createElement("script");
      script.id = "openwidget-script";
      script.type = "text/javascript";

      script.innerHTML = `
        window.__ow = window.__ow || {};
        window.__ow.organizationId = "da38f175-d0d0-40fd-8510-a2bceadb063a";
        window.__ow.template_id = "f9f564db-de89-4dc5-ab98-6fb77e9a5e42";
        window.__ow.integration_name = "manual_settings";
        window.__ow.product_name = "chatbot";

        (function(n,t,c){
          function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}
          var e={
            _q:[],_h:null,_v:"2.0",
            on:function(){i(["on",c.call(arguments)])},
            once:function(){i(["once",c.call(arguments)])},
            off:function(){i(["off",c.call(arguments)])},
            get:function(){
              if(!e._h) throw new Error("[OpenWidget] You can't use getters before load.");
              return i(["get",c.call(arguments)])
            },
            call:function(){i(["call",c.call(arguments)])},
            init:function(){
              var n=t.createElement("script");
              n.async = true;
              n.type = "text/javascript";
              n.src = "https://cdn.openwidget.com/openwidget.js";
              t.head.appendChild(n)
            }
          };
          !n.__ow.asyncInit && e.init();
          n.OpenWidget = n.OpenWidget || e;
        })(window, document, [].slice);
      `;

      document.body.appendChild(script);
    }
  }, [user]);

  if (!user) return null; // ✅ don't render anything if no user

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
