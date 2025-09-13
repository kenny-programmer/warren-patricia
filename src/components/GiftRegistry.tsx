import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Copy, Download, Gift } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { toast } from '@/components/ui/use-toast'

type RegistryOption = {
  id: string
  label: string
  accountName: string
  accountNumber: string
  qrSrc: string
}

const REGISTRIES: RegistryOption[] = [
  {
    id: 'gcash',
    label: 'GCash',
    accountName: 'PA*****A M** A.',
    accountNumber: '0955-975-5168',
    qrSrc: '/gcash.png'
  },
  {
    id: 'bdo',
    label: 'BDO',
    accountName: 'Patricia Mae Adan',
    accountNumber: '012020148168',
    qrSrc: '/bdo.png'
  }
]

const GiftRegistry = () => {
  const [active, setActive] = useState(REGISTRIES[0].id)

  const activeRegistry = REGISTRIES.find(r => r.id === active) ?? REGISTRIES[0]

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({ title: 'Copied to clipboard', description: text })
    } catch {
      // no-op
    }
  }

  return (
    <Card className="wedding-card overflow-hidden">
      <CardContent className="p-6 md:p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-serif text-primary mb-2 flex items-center justify-center gap-2">
            <Gift className="w-6 h-6" />
            Gift Registry
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your presence is the greatest gift. If you wish to bless us further, you may use any of the options below.
          </p>
        </div>

        <Tabs value={active} onValueChange={setActive} className="w-full">
          <div className="flex justify-center">
            <TabsList className="mb-6">
              {REGISTRIES.map(reg => (
                <TabsTrigger key={reg.id} value={reg.id} className="px-4">
                  {reg.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {REGISTRIES.map(reg => (
            <TabsContent value={reg.id} key={reg.id} className="animate-in fade-in zoom-in-95 duration-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                <div className="w-full">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="group w-full">
                        <div className="aspect-square bg-muted rounded-md flex items-center justify-center overflow-hidden transition-transform group-hover:scale-[1.02]">
                          <img src={reg.qrSrc} alt={`${reg.label} QR Code`} className="w-full h-full object-contain" />
                        </div>
                        <span className="block text-xs text-muted-foreground mt-2 opacity-80">Click QR to zoom</span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <img src={reg.qrSrc} alt={`${reg.label} QR Code large`} className="w-full h-full object-contain" />
                    </DialogContent>
                  </Dialog>
                  <div className="flex gap-3 mt-4">
                    <a href={reg.qrSrc} download={`${reg.label}-qr.png`}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" className="gap-2">
                            <Download className="w-4 h-4" /> Download QR
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Save the QR image</TooltipContent>
                      </Tooltip>
                    </a>
                  </div>
                </div>

                <div className="w-full">
                  <div className="rounded-md bg-muted/40 p-5">
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-sm text-muted-foreground">Account Name</dt>
                        <dd className="text-lg font-medium">{reg.accountName}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Account Number</dt>
                        <dd className="text-lg font-mono">{reg.accountNumber}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Bank/Wallet</dt>
                        <dd className="text-lg">{reg.label}</dd>
                      </div>
                    </dl>
                    <div className="mt-4">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button onClick={() => handleCopy(reg.accountNumber)} className="gap-2 w-full md:w-auto bg-gradient-maroon hover:opacity-90">
                            <Copy className="w-4 h-4" /> Copy Account Number
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Copy number to clipboard</TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default GiftRegistry
