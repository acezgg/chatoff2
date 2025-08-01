import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Send, Paperclip, Mic } from "lucide-react";

export const ChatInterface = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-chat-sidebar border-r border-border/50 flex flex-col">
        <div className="p-4">
          <Button variant="chat" className="w-full justify-start gap-2">
            <Plus size={16} />
            New chat
          </Button>
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-border/50 p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-semibold text-sm">
              CO
            </div>
            <h1 className="text-xl font-semibold text-foreground">Chatoff</h1>
          </div>
          <Button variant="chat" size="sm" className="gap-2">
            <Plus size={16} />
            New chat
          </Button>
        </div>

        {/* Chat content - empty state */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <span className="text-white font-bold text-2xl">CO</span>
            </div>
            <h2 className="text-3xl font-semibold text-foreground">Start a Chat!</h2>
          </div>
        </div>

        {/* Message input */}
        <div className="p-4 border-t border-border/50">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-chat-input rounded-xl border border-border/50 focus-within:border-brand-primary/50 transition-colors">
              <div className="flex items-end gap-3 p-4">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Paperclip size={20} />
                </Button>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message..."
                  className="flex-1 bg-transparent border-0 outline-none resize-none text-foreground placeholder:text-muted-foreground min-h-[24px] max-h-32"
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      // Handle send message
                    }
                  }}
                />
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <Mic size={20} />
                  </Button>
                  <Button 
                    variant="default" 
                    size="icon" 
                    className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg"
                    disabled={!message.trim()}
                  >
                    <Send size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};