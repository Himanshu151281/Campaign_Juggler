import { useState } from "react";
import { Campaign, storage } from "@/lib/storage";
import { CampaignForm } from "@/components/CampaignForm";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CampaignTable } from "@/components/CampaignTable";

const Index = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(storage.getCampaigns());
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  const handleSave = (campaign: Campaign) => {
    storage.saveCampaign(campaign);
    setCampaigns(storage.getCampaigns());
    setEditingCampaign(null);
    setIsCreating(false);
    toast({
      title: "Success",
      description: `Campaign ${campaign.id} has been saved.`,
    });
  };

  const handleDelete = (id: string) => {
    storage.deleteCampaign(id);
    setCampaigns(storage.getCampaigns());
    toast({
      title: "Success",
      description: `Campaign ${id} has been deleted.`,
      variant: "destructive",
    });
  };

  if (isCreating || editingCampaign) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">
          {isCreating ? "Create New Campaign" : "Edit Campaign"}
        </h1>
        <CampaignForm
          campaign={editingCampaign || undefined}
          onSubmit={handleSave}
          onCancel={() => {
            setEditingCampaign(null);
            setIsCreating(false);
          }}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Email Campaigns</h1>
        <Button
          onClick={() => setIsCreating(true)}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          New Campaign
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <CampaignTable
          campaigns={campaigns}
          onEdit={setEditingCampaign}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Index;