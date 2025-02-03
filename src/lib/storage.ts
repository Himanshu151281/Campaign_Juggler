import { z } from "zod";

export const CampaignSchema = z.object({
  id: z.string(),
  mailerId: z.string(),
  listId: z.string(),
  scheduledAt: z.string(),
  status: z.enum(["draft", "scheduled", "sent"]),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Campaign = z.infer<typeof CampaignSchema>;

const STORAGE_KEY = "email-campaigns";

const defaultCampaigns: Campaign[] = [
  {
    id: "1",
    mailerId: "template1",
    listId: "list1",
    scheduledAt: new Date(Date.now() + 86400000).toISOString(),
    status: "scheduled",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    mailerId: "template2",
    listId: "list2",
    scheduledAt: new Date(Date.now() + 172800000).toISOString(),
    status: "draft",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    mailerId: "template1",
    listId: "list3",
    scheduledAt: new Date(Date.now() - 86400000).toISOString(),
    status: "sent",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const storage = {
  getCampaigns: (): Campaign[] => {
    if (typeof window === "undefined") return defaultCampaigns;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultCampaigns));
      return defaultCampaigns;
    }
    return JSON.parse(stored);
  },

  getNextId: (): string => {
    const campaigns = storage.getCampaigns();
    const maxId = campaigns.reduce((max, campaign) => {
      const currentId = parseInt(campaign.id);
      return currentId > max ? currentId : max;
    }, 0);
    return (maxId + 1).toString();
  },

  saveCampaign: (campaign: Campaign): void => {
    const campaigns = storage.getCampaigns();
    const index = campaigns.findIndex((c) => c.id === campaign.id);
    if (index >= 0) {
      campaigns[index] = campaign;
    } else {
      campaign.id = storage.getNextId();
      campaigns.push(campaign);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(campaigns));
  },

  deleteCampaign: (id: string): void => {
    const campaigns = storage.getCampaigns();
    const filtered = campaigns.filter((c) => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  },
};

export const mockData = {
  templates: [
    { id: "template1", name: "Welcome Email" },
    { id: "template2", name: "Newsletter" },
    { id: "template3", name: "Promotional" },
  ],
  lists: [
    { id: "list1", name: "All Subscribers" },
    { id: "list2", name: "New Users" },
    { id: "list3", name: "Premium Members" },
  ],
};