
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

const AstrologyTools = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [chartResult, setChartResult] = useState<string | null>(null);

  const generateChart = (e: React.FormEvent) => {
    e.preventDefault();

    // This is a simplified placeholder for the actual astrology API integration
    // In a production app, you would use an actual API call here
    setTimeout(() => {
      setChartResult(`Basic birth chart for ${name} born on ${date ? format(date, 'PP') : ''} at ${time} in ${location}`);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8 border-astral-purple/30">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4 text-center">{t('birthChart')}</h3>
          
          <form onSubmit={generateChart} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t('name')}</Label>
                <Input 
                  id="name" 
                  placeholder={t('enterName')} 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthdate">{t('birthDate')}</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="birthdate"
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>{t('pickDate')}</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">{t('birthTime')}</Label>
                <Input 
                  id="time" 
                  type="time" 
                  value={time} 
                  onChange={(e) => setTime(e.target.value)} 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">{t('birthLocation')}</Label>
                <Input 
                  id="location" 
                  placeholder={t('enterLocation')} 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)} 
                  required 
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-astral-purple hover:bg-astral-purple/90"
            >
              {t('generateChart')}
            </Button>
          </form>

          {chartResult && (
            <div className="mt-6 p-4 border border-astral-purple/30 bg-astral-purple/10 rounded-lg">
              <h4 className="font-semibold mb-2">{t('yourBasicChart')}</h4>
              <p>{chartResult}</p>
              
              {!user || user.role === 'free' ? (
                <div className="mt-4 p-3 bg-astral-gold/10 border border-astral-gold rounded">
                  <p className="text-sm">{t('upgradeForFullChart')}</p>
                  <Button 
                    variant="default" 
                    className="mt-2 bg-astral-gold hover:bg-astral-gold/90 text-astral-dark"
                  >
                    {t('upgradeToPremium')}
                  </Button>
                </div>
              ) : null}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AstrologyTools;
